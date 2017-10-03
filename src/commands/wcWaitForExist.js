import _ from 'lodash';

/**
 * @alias browser.wcWaitForExist
 * @param {string=} selector
 */

// Note: function name must be async to signalize WebdriverIO that this function returns a promise
export default async function async(selector, ms, reverse) {
    reverse = typeof reverse === 'boolean' ? reverse : false
     /*!
     * ensure that ms is set properly
     */
    if (typeof ms !== 'number') {
        ms = this.options.waitforTimeout
    }

    const isReversed = reverse ? '' : 'not'
    const errorMsg = `element ("${selector || this.lastResult.selector}") still ${isReversed} existing after ${ms}ms`

    return this.waitUntil(() => {
        return !!this.wcElement(selector).value;
    }, ms, errorMsg)
}
