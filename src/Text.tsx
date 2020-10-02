/* eslint-disable no-use-before-define */
import React from "react"
import { TextAttrs } from "./types"

type Props = {
  text: string
  textAttrs: TextAttrs
}

const Text = ({ text, textAttrs }: Props) => (
  <article className="border-top mt-5 pt-4">
    <p>{text}</p>
  </article>
)

export default Text
