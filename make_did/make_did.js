
// NOT fully working yet going to just use the glaze method to make a did

import {ComposeClient} from "@composedb/client";
import {Ed25519Provider } from 'key-did-provider-ed25519';
import { fromString } from 'uint8arrays'
import { DID } from 'dids'

let input_seed = process.argv[2]

// use 32 bytes of base16 chars ie a8f7d2e091bca8f7d2e091bca8f7d2e

console.log("Using input seed " + input_seed)

// authenticate our DID
const seed = fromString(input_seed, 'base16')
const did = new DID({ provider: new Ed25519Provider(seed), resolver: this.resolverRegistry })

console.log("Created a did at : " + seed)

