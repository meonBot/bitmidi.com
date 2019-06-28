import { Component, h } from 'preact' /** @jsx h */
import c from 'classnames'

import { isBrowser, isProd } from '../config'

export default class CarbonAd extends Component {
  componentDidMount () {
    if (!isBrowser || !isProd) return
  }

  shouldComponentUpdate () {
    return false
  }

  render (props) {
    // if (!isProd) {
    //   return (
    //     <div class={c('bg-washed-red h5', className)} {...rest} />
    //   )
    // }

    return (
      <div>
        <div id='_carbonads_js' />
        <style dangerouslySetInnerHTML={{ __html: `
          #carbonads {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
            Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
          }

          #carbonads {
            display: flex;
            max-width: 330px;
            background-color: hsl(0, 0%, 98%);
            box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, .1);
          }

          #carbonads a {
            color: inherit;
            text-decoration: none;
          }

          #carbonads a:hover {
            color: inherit;
          }

          #carbonads span {
            position: relative;
            display: block;
            overflow: hidden;
          }

          #carbonads .carbon-wrap {
            display: flex;
          }

          .carbon-img {
            display: block;
            margin: 0;
            line-height: 1;
          }

          .carbon-img img {
            display: block;
          }

          .carbon-text {
            font-size: 13px;
            padding: 10px;
            line-height: 1.5;
            text-align: left;
          }

          .carbon-poweredby {
            display: block;
            padding: 8px 10px;
            background: repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4);
            text-align: center;
            text-transform: uppercase;
            letter-spacing: .5px;
            font-weight: 600;
            font-size: 9px;
            line-height: 1;
          }
        ` }} />
      </div>
    )
  }
}