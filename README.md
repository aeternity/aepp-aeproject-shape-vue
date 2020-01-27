# aepp-aeproject-shape-vue

The shape project is a sample Wallet/Identity Aepp that expects an Aepp to be loaded into an iFrame contained into this base aepp.
This loaded Aepp presents ready to use aepp with predefined **Vue.js** front-end framework and **aeproject** integration.
The provided boilerplate code contains all modules and settings needed to facilitate its usage - Vue.js project created by vue cli, a Sophia smart contract and scripts for deployment on the Blockchain.
It gives a helpful code scaffolding for further aeproject project development and shows examples how to read and record a data on the Blockchain through the browser.
The aepp represents a smart contract that manages a ToDo List and enables interaction with each ToDo's status. It uses a local node spawned by aeproject and one of the default aeproject account to sign transactions. 

Please follow the steps bellow:

## AEproject installation

First you need to install **[aeproject](https://github.com/aeternity/aepp-aeproject-js)** (if it is installed already, skip this step).
```
    npm install -g aeproject
```

## Download the vue shape

In a new empty folder run the following command:

```
    aeproject shape vue
```

Now a tidy structured project must have been shaped. 

## Run a local node
Next step is to build a local aeternity node:

```
    aeproject node
```

## Deploy the contract
Let's deploy the contract:
```
    aeproject deploy
```

## Copy the deployed contract address

```
    aeproject history
```
Copy the address of the contract that is shown as a Result in the report table.

## Apply the deployed contract address

Assign the deployed contract address(above step) to the `contractAddress` property in `src/contractDetails.js` file.
Now we are ready to run the aepp.

First start the identity/wallet Aepp, which will start on port 8080:
```
    cd aepp-aeproject-shape-vue/identity-provider
    npm run serve
```
Let's start the ToDo aepp, which will start on port 8081:

```
    cd ../aepp
    npm run serve
```
