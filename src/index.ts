import { extendEnvironment } from "hardhat/config"
import { lazyObject } from "hardhat/plugins"

import account from "./account"
import * as address from "./address"
import forking from "./forking"
import * as number from "./number"
import ownable from "./ownable"
import time from "./time"
import snapshot from "./snapshot"
import upgrades from "./upgrades"

import "./type-extensions"

import "hardhat-deploy/dist/src/type-extensions"
import "@openzeppelin/hardhat-upgrades/dist/type-extensions"

extendEnvironment((hre) => {
  hre.helpers = lazyObject(() => {
    return {
      account: lazyObject(() => {
        return account(hre)
      }),
      address: lazyObject(() => {
        return address
      }),
      forking: lazyObject(() => {
        return forking(hre)
      }),
      number: lazyObject(() => {
        return number
      }),
      ownable: lazyObject(() => {
        return ownable(hre)
      }),
      time: lazyObject(() => {
        return time(hre)
      }),
      snapshot: lazyObject(() => {
        return snapshot(hre)
      }),
      upgrades: lazyObject(() => {
        return upgrades(hre)
      }),
    }
  })
})
