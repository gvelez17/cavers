# Welcome to the Cavers project - Spelunking in ComposeDB

Motivation: composites provide a way to share a decentralized database across applications

We also want to make it easy for developers to do small useful things

And use Ceramic from where they already are - such as in Discord!

<img width="725" alt="image" src="https://user-images.githubusercontent.com/798887/181719980-e9200b19-ebbb-4b0e-a118-76f2e343b04b.png">

# Please Join Our Demo!

======>.  Enter the [Knowledge Xchange Discord Server](https://discord.gg/F4EXQe5G).  <======

Use the three dots menu on individual messages to save messages as Todo items or tag them for later

## Mark as a Todo
<img width="798" alt="image" src="https://user-images.githubusercontent.com/798887/181720588-6942cd0d-f21b-4cf7-9ac9-d0e54212ac19.png">


## Tag and Save Highlights

<img width="790" alt="image" src="https://user-images.githubusercontent.com/798887/181720352-97d440ed-c228-45bf-a700-e68bd6dd6cba.png">

## View the todos from discord

`/todos`

## View tags, messages and todos on Ceramic

First edit `~/.ceramic/daemon.config.json` and add a section to index the models

```
"indexing": {
    "db": "sqlite:///Users/gv/.ceramic/indexing.sqlite",
    "allow-queries-before-historical-sync": true,
    "models": ["kjzl6hvfrbw6c96ffak9aod4tdv3ufmbe7ner8hvrq4750g9p38676u6iga7l99",
"kjzl6hvfrbw6c5yj6vtu41twqhu93xf49melrv0w2i5r8hrksn16scz1azp53gh",
"kjzl6hvfrbw6c7ujre2hujba6tr5b03wsesolmivl6fj661bx8d09u39sypajbc",
"kh4q0kq8h3j3zb52p8gjcayuwrdpt"]
  }
```

Run Ceramic node with indexing on

`CERAMIC_ENABLE_EXPERIMENTAL_INDEXING='true' node packages/cli/bin/ceramic.js daemon`


Install and run the Todo react app:

https://github.com/stephhuynh18/todo-ceramic

Install and run the Highlights Tags react app:

https://github.com/stephhuynh18/highlights-hacklisbon

## Monitor metrics

Install and run the analytics app

https://github.com/pawartur/js-pinner-analytics

## Technical Summary

### Data Modelling

We have used two composites with a shared model between them.

TODO uses a 1-1 pattern of relations between Messages and Tasks, which is implemented at the application level.

Tags/Highlights uses a 1-many pattern of relations between Messages and Tags, which is implemented at the application level.

### Applications

The Discord "Pinit" app writes both TODO and Tag composites, and can display lists of TODOs with `/todos` command

The TODO app was built on Next.js to read and write the TODO composite including Tasks + Messages 

The Tag app was based on the Notes example app and displays the Tag composite including Tags + Messages

The Analytics app was built on Next.js, and gathers data about all models and data sources

### Next steps

Currently the DID is at the app level, the next version would include logins, roles and social login mapping.

# Feedback

Please enter feedback by messaging in discord and tag your messages with "feedback" 

Also you may enter a general rating tag on the message [What do you think of our app?](https://discord.com/channels/1001118074717610055/1001118075376128032/1002497471911579648)

Suggested improvements can be entered as Todos

## Credits

This was a collaborative effort - the team itself is @stephhuynh18, @pawartur and @gvelez17

Alex, Paul, Sergey, Spencer were extraordinarily helpful in providing bugfixes and technical support.

Several bugs in js-ceramic were fixed during the course of the hackathon

# Thank you!

___

### Overview & Snippets

breadcrumbs here:

https://github.com/stephhuynh18/todo-ceramic

https://github.com/stephhuynh18/highlights-hacklisbon

https://github.com/pawartur/js-pinner-analytics

https://github.com/gvelez17/pinit-ts

Discord demo server: https://discord.gg/F4EXQe5G

also some docs

https://github.com/ceramicstudio/js-composedb/pull/8
