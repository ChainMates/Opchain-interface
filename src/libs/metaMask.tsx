const ethers = require("ethers");


export async function ConnectMmWallet() {
    let signer = null

    let provider;
    if (window.ethereum == null) {
        alert("please install metamask, reopen this window when metamask was installed") // should be replaced with proper alert
        provider = ethers.getDefaultProvider()

    } else {
        try {

            provider = new ethers.BrowserProvider(window.ethereum)
            signer = await provider.getSigner()

            return true

        } catch (err) {

            return false
        }
    }
}

// const addressToValue = "0x09885c7aAAa2010956EFb593813221C3006e1958";
// const ETHAmountValue = 12;
// const weiAmountValue = ethers.utils.parseEther(ETHAmountValue) //parseInt(ETHAmountValue) * 10**18

// const transactionRequest = {
//     to: addressToValue.toString(),
//     value: weiAmountValue.toString()
// }

// const receipt = await signer.sendTransaction(transactionRequest);
// console.log(receipt);
