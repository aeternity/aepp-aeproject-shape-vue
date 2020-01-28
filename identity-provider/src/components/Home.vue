<template>
	<div v-if="!runningInFrame" class="">
		<div v-if="isPanelOpen" class="wallet-details">
			<h1 class="">Wallet Aepp</h1>
            <ClientConfig></ClientConfig>
			<div class="border">
				<div class="">
					<div class="">
						<span class="wallet-details-label">Public Key:</span> {{ config.account.publicKey }}
					</div>
				</div>
				<div v-if="height" class="">
					<div class="p-2 w-1/4">
						<span class="wallet-details-label">Height:</span> {{height}}
					</div>
				</div>
				<div v-if="height" class="">
					<div class="p-2 w-1/4">
						<span class="wallet-details-label">Balance:</span> {{balance}}
					</div>
				</div>
				<div class="">
					<div class="p-2 w-1/4">
						<span class="wallet-details-label">Network:</span> {{ config.network }}
					</div>
				</div>
			</div>
		</div>
        <div class="panel-control">
            <a href="#" @click="togglePanel">{{ panelStatus }}</a>
        </div>

		<div v-if="!aeppUrl" class="">
            Aepp not loaded yet!
		</div>
		<!-- external app -->
		<iframe v-show="aeppUrl" ref="aepp" class="" src="about:blank" frameborder="0"></iframe>
	</div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import Wallet from '@aeternity/aepp-sdk/es/ae/wallet'
    import MemoryAccount from '@aeternity/aepp-sdk/es/account/memory'
    import ClientConfig from '@/components/ClientConfig'

    export default {
        components: {
            ClientConfig
        },
        data() {
            return {
                panelStatus: "Open",
                isPanelOpen: false,
                runningInFrame: window.parent !== window,
                client: null,
                balance: null,
                height: null,
            }
        },
        methods: {
            togglePanel() {

                this.isPanelOpen = this.isPanelOpen ?
                    (this.panelStatus = 'Open', false) :
                    (this.panelStatus = 'Close', true);
            },
            confirmDialog(method, params, { id }) {
                return Promise.resolve(window.confirm(`User ${ id } wants to run ${ method } ${ params }`))
            },
            async getClient() {
                console.log(this.network);
                try {
                    this.client = await Wallet({
                        url: this.network.url,
                        internalUrl: this.network.internalUrl,
                        compilerUrl: this.network.compilerUrl,
                        accounts: [MemoryAccount({
                            keypair: {
                                secretKey: this.config.account.privateKey,
                                publicKey: this.config.account.publicKey
                            }})],
                        address: this.config.account.publicKey,
                        networkId: this.network.network_id,
                        onTx: this.confirmDialog,
                        onChain: this.confirmDialog,
                        onAccount: this.confirmDialog,
                        onContract: this.confirmDialog
                    });

                    this.height = await this.client.height()
                    this.balance = await this.client.balance(
                        this.config.account.publicKey)
                        .catch(() => 0)
                } catch (e) {
                    console.log("ERROR:", e);
                }

                if (!this.runningInFrame) this.$refs.aepp.src = this.aeppUrl
                else window.parent.postMessage({ jsonrpc: '2.0', method: 'ready' }, '*')

            }
        },
        computed: {
            config: function() {
                return this.$store.state.config;
            },
            aeppUrl: function() {
                return this.$store.state.config.aeppUrl;
            },
            network: function() {
                return this.$store.getters.getNetwork;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.wallet-details {
		border: 1px solid #F7286E;
		padding: 20px 20px 40px 20px;
		background: #311b58;
		color: white;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}

    .panel-control {
        background-color: #FF0D6A;
        padding: 5px 20px;
        width: max-content;
        margin: 0 auto;
    }
    .panel-control a {
        text-decoration: none;
        color: #ffffff;
        font-family: "Inter UI", sans-serif;
    }

	.wallet-details-label {
		font-weight: bold;
		color: #F7286E;
	}

	iframe {
		margin-top: 20px;
		width: 100%;
		height: 100vh
	}
</style>
