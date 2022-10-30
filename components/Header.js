import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div>
            Decentralized Lottery
            <ConnectButton moralisAutg={false} />
        </div>
    )
}
