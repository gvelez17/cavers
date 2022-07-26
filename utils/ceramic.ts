import { ComposeClient } from '@composedb/client';
import { definition } from '../models/runtime.integration-task';
import { Ed25519Provider } from 'key-did-provider-ed25519'
import * as ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import * as KeyDidResolver from 'key-did-resolver'
import * as PkhDidResolver from 'pkh-did-resolver'
import { Resolver } from 'did-resolver'
import { DID } from 'dids'
import { CeramicClient } from '@ceramicnetwork/http-client'
import * as u8a from 'uint8arrays'

const SEED = '1515f3a1b8f0325274783382097cfc592dd49ded127e27a7459c1b6be1e85cf4'

let composeClientInstance: ComposeClient

export async function getComposeClient(): Promise<ComposeClient>{
  if (composeClientInstance) {
    return composeClientInstance
  }

  const instance = new ComposeClient({
    ceramic: 'http://localhost:7007',
    definition,
  });

  const ceramicClientInstance = new CeramicClient('http://localhost:7007')

  const provider = new Ed25519Provider(u8a.fromString(SEED, 'base16'))
  const keyDidResolver = KeyDidResolver.getResolver()
  const pkhDidResolver = PkhDidResolver.getResolver()
  const threeIdResolver = ThreeIdResolver.getResolver(ceramicClientInstance)
  const resolver = new Resolver({
    ...threeIdResolver,
    ...pkhDidResolver,
    ...keyDidResolver,
  })
  const did = new DID({ provider, resolver })

  await did.authenticate()

  instance.setDID(did)

  await did.authenticate()

  composeClientInstance = instance
  return composeClientInstance
}
