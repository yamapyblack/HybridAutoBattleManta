# HybridAutoBattle

HybridAutoBattle combines Onchain and Offchain for both security and better UX, appealing to the mass.

## Demo

[https://hybrid-auto-battle-manta.vercel.app/](https://hybrid-auto-battle-manta.vercel.app/)

## Description

**Why Blockchain Game?**

The appeal of blockchain games is best captured by the phrase "Play to earn by your own assets". Players utilize their owned assets to play and earn new assets.

This is similar to the analog Pokémon card game, where players use their favorite cards to battle and earn rare cards as rewards.

Blockchain technology allows humanity to own digital data for the first time, as detailed by Chris Dixon, a partner at a16z, in his concept of "ReadWriteOwn". The fun lies in playing with owned assets and earning new ones.

**Offchain Game vs Onchain Game**

![logo](https://github.com/yamapyblack/HybridAutoBattleManta/blob/main/frontend/public/images/lp/onchainOrOffchain.jpeg?raw=true)

Let's examine the current mainstream of blockchain games, Offchain games. "Do users truly own these assets?" Even if they do, can these assets be freely issued or devalued by the admin's authority?

This is akin to the issues between CeFi and DeFi. In response, we developed a decentralized game, an Onchain game. However, Onchain games suffer from poor UX and the risk of smart contract hacking (as many DeFi projects have been hacked).

**What is the Hybrid Game**

![logo](https://github.com/yamapyblack/HybridAutoBattleManta/blob/main/frontend/public/images/lp/hybrid.jpeg?raw=true)

We propose a "HybridGame", maintaining asset ownership (Self-custody) while running the game Offchain to enhance UX.

Specifically, the game records three elements Onchain: the "start state," "end state," and "random number seed." This system is inspired by the Ethereum Layer2 solution "Plasma," and we named it "PlasmaEngine". Plasma writes the initial and final states to Ethereum L1, with intermediate states handled Offchain.

With "PlasmaEngine," we can offer scalable games while ensuring asset ownership.

**The Detail of PlasmaEngine**

![logo](https://github.com/yamapyblack/HybridAutoBattleManta/blob/main/frontend/public/images/lp/PlasmaBattle-architecutre.png?raw=true)

This engine is primarily designed for auto-progress strategy battle games (not applicable to all game genres).

In games using this engine, users make only two transactions: at the start and end of the game.

1. The user strategizes, selects battle members, equips them, and prepares.

2. Once ready, the user initiates the battle with a transaction.

3. This transaction records the random number seed Onchain.

4. The battle begins, conducted entirely Offchain using Onchain data.

5. The admin signs the battle result and returns it to the user.

6. The user receives the signature and records the end transaction.

7. The battle result is recorded Onchain.

Some critics may point out the need for the admin's private key, suggesting centralization. However, the scope is limited, and any admin misconduct is easily detectable, as the random number seed is public (assuming the battle logic is open-source). With the start state and random seed, anyone can verify the end state at any point.

Currently, there is no mechanism to forcibly correct detected misconduct. We don't believe it's necessary, but technically, it is possible to implement FraudProof or ZkProof like Rollups.

Finally, it would be ideal if users could claim tokens based on Onchain battle results (waiting about seven days might be prudent).

## Contract Deployment

```
cd onchain
```

Enviroment

.env (This is admin signer address)

```
PRIVATE_KEY=0x...
```

Install

```
forge install
```

Deploy

```
forge script script/PlasmaBattleAlpha.s.sol --broadcast --fork-url https://pacific-rpc.sepolia-testnet.manta.network/http
```

## Contract addresses(Manta sepolia)

BattleContract

[0x15EBaAD8717A6B71116ffAF1E0FD4A3b4DE0F96C](https://pacific-explorer.sepolia-testnet.manta.network/address/0x15EBaAD8717A6B71116ffAF1E0FD4A3b4DE0F96C)

## Frontend

```
cd frontend
```

Enviroment

.env (Same as onchain's signer address)

```
PRIVATE_KEY=0x...
```

Install

```
bun install
```

Start

```
bun run dev
```

