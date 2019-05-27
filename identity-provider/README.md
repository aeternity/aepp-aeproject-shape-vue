# aepp-forgae-shape-vue
This project presents ready to use aepp with predefined **Vue.js** front-end framework and **forgae** integration.
The provided boilerplate code contains all modules and settings needed to facilitate its usage - Vue.js project created by vue cli, a Sophia smart contract and scripts for deployment on the Blockchain.
It gives a helpful code scaffolding for further forgae project development and shows examples how to read and record a data on the Blockchain through the browser.
The aepp represents a smart contract that manages a ToDo List and enables interaction with each ToDo's status. It uses a local node spawned by forgae and one of the default forgae account to sign transactions. 

Please follow the steps bellow:



## Forgae installation

First you need to install **[forgae](https://github.com/aeternity/aepp-forgae-js)** (if it is installed already, skip this step).
```
    npm install -g forgae
```

## Download the vue shape

In a new empty folder run the following command:

```
    forgae shape vue
```

Now a tidy structured project must have been shaped. 

## Run a local node
Next step is to build a local aeternity node:

```
    forgae node
```

## Deploy the contract
Let's deploy the contract:
```
    forgae deploy
```

## Copy the deployed contract address

```
    forgae history
```
Copy the address of the contract that is shown as a Result in the report table.

## Apply the deployed contract address

Assign the deployed contract address(above step) to the `contractAddress` property in `src/contractDetails.js` file.
Now we are ready to run the aepp.

```
    cd aepp-forgae-shape-vue
    npm run serve
```

*By default the front-end app running at: Local:   http://localhost:8080/*