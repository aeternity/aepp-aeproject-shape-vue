<template>
  <div>
    <h2>Client configuration</h2>
    <fieldset>
      <legend>Account information</legend>
      <ae-input label="Public Key" placeholder="Enter your account publicKey" v-model="publicKey">
        <ae-toolbar slot="footer">
          This field is mandatory
        </ae-toolbar>
      </ae-input>
      <ae-divider />
      <ae-input label="Private Key" placeholder="Enter your account privateKey" v-model="privateKey">
        <ae-toolbar slot="footer">
          This field is mandatory
        </ae-toolbar>
      </ae-input>
    </fieldset>
    <fieldset>
      <legend>Connections</legend>
      <div class="col-half">
        <h2>Network</h2>
        <div>
          <ae-check v-model="selectedNetwork" name="network_id" value="ae_devnet" type="radio">
            Local
          </ae-check>
        </div>
        <div>
          <ae-check v-model="selectedNetwork" name="network_id" value="ae_uat" type="radio">
            Test
          </ae-check>
        </div>
        <div>value: {{ selectedNetwork }}</div>
      </div>
      <div class="col-half">
        <ae-input label="Aepp Url" placeholder="http://127.0.0.1:8081" v-model="aeppUrl">
          <ae-toolbar slot="footer">
            This field is mandatory
          </ae-toolbar>
        </ae-input>
      </div>
    </fieldset>
    <ae-divider />
    <div class="col-half">
    <ae-button face="round" fill="primary" extend>Connect</ae-button>
    </div>
    <ae-divider />
  </div>
</template>

<script>
import {AeButton, AeInput, AeToolbar, AeDivider, AeCheck, mixins } from '@aeternity/aepp-components';
import network from '../networks';
export default {
    name: "ClientConfig",
    mixins: [mixins.events],
    components: {
        AeButton,
        AeInput,
        AeToolbar,
        AeDivider,
        AeCheck
    },
    data() {
        return {
            publicKey: "",
            privateKey: "",
            selectedNetwork: "",
            aeppUrl: ""
        }
    }
}
</script>

<style scoped>
  .col-half {
  width: 50%;
    display: inline-flex;
  }
  label:not(.ae-check) {
    display: block;
  }
</style>
