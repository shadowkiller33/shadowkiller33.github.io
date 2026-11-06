---
layout: post
title: "Shape, Not Return: What Volatility Funds Actually Sell"
title_zh: 波动率基金卖的是形状，不是收益
permalink: /blogs/shape-not-return/
description: A volatility fund should be judged by the pattern of its gains and losses, not by its average return. How to judge short-volatility, relative-value, long-volatility and tail-risk funds, with Ambrus Group as a case study.
disclaimer: The views expressed here are my own and do not constitute investment advice.
disclaimer_zh: 本文观点仅代表个人，不构成投资建议。
excerpt_separator: ""
---

<div class="lang-block lang-en" lang="en" markdown="1">

<p class="dedication">This one is for a very good friend at Citadel Securities. He taught me volatility, the ideas and the tricks alike, and the VIX options and futures I learned on were my first serious step into the markets.</p>

<section class="abstract">
<h2 class="abstract-label">Abstract</h2>
<p>A volatility fund does not really sell returns. It sells a shape: a pattern of when it makes money, when it loses money and how much. Judged on returns alone, three of the four CBOE Eurekahedge volatility categories look mediocre and only relative value looks good, but that is mostly by design. Short-volatility funds sell options, which works like selling insurance: they earn small, steady gains and now and then take a large loss. Long-volatility and tail-risk funds buy options, which works like buying insurance: they pay a steady cost and make large gains in sharp sell-offs, so the right question is how much they cost for each dollar they pay out. Relative-value funds offer something rare: returns that move very little with anything else.</p>
<p>The extra return from selling options is not earned evenly either. Most of it is earned overnight and in short-dated options, it shrinks while risk is building, and it is largest right after a spike. The last part of the article looks at Ambrus Group, a tail fund that says it has almost eliminated the running cost of its protection, and at what that gives up: for each dollar invested, it pays out less in a crash than a classic tail fund.</p>
</section>

## Four kinds of volatility funds

"Volatility fund" is one label for four quite different kinds of funds. The CBOE Eurekahedge indices, with data reconstructed back to 2005 (2008 for tail risk), group them as short volatility, relative value, tail risk and long volatility. They are not versions of one strategy. Two of them, short volatility and tail risk, behave almost as opposites.

{% include posts/shape-not-return/table-indices.html %}

{% include posts/shape-not-return/fig-1.html %}

The chart shows what the table does not. Put-writing (selling put options, which is what the Cboe PUT index does) and short volatility have drawdowns as deep as the stock market's, yet earn less than stocks. Relative value is the only category with a decent return and small drawdowns. Tail risk has a negative return and the deepest drawdown, which is expected: it is built to pay off in crashes, not to earn a steady return.

<details class="more" markdown="1">
<summary>Limits of the index data</summary>

1. **The samples are small.** The Short Volatility index [launched in 2015 with 15 funds](https://www.hedgeweek.com/cboe-launches-hedge-fund-benchmarks-eurekahedge/); by early 2022 it had two. Relative Value had nine funds in 2023, and Tail Risk seven in 2020. An average of two funds says little about a whole category.
2. **Funds that failed are not counted.** XIV lost more than 90% in a single day in February 2018 and was shut down; LJM Preservation and Growth lost roughly 80% in two days; Malachite and Parplus were wound down in March 2020; Allianz Structured Alpha lost about $7 billion. The index's −31.75% drawdown is the drawdown of the funds that survived.
3. **A few months can change the long-term numbers.** The Long Volatility index's annualized return since inception was [4.17% at the end of February 2020](https://hedgefundalpha.com/news/hedge-fund-managers-posted-strongest-monthly-outperformance-over-global-equities-since-2009/) and 5.38% a month later. One month changed a fifteen-year record.

</details>

## 2020: one crash, opposite results

2020 shows both patterns side by side. The Short Volatility index lost about 26% in February and March, spent the rest of the year earning it back, and ended close to flat. The Tail Risk index made 37% in March, then lost money in seven of the next eight months. Two lessons follow. First, selling volatility pays best right after a spike, but only the funds that survive the spike get paid. Second, a hedge that is not sold after it pays off gives the profit back.

{% include posts/shape-not-return/fig-2.html %}

<details class="more" markdown="1">
<summary>2020 in detail, and research on timing</summary>

Month by month, the Short Volatility index lost 12.53% in February and 15.85% in March, then made 9.10% in April, 12.36% in July, 6.84% in August and 5.12% in September, ending the year down 0.80%. The reason is that after a spike, implied volatility (the volatility priced into options) falls more slowly than realized volatility (how much the market actually moves). So the extra return from selling options is largest in the weeks after a spike. A fund that survives the spike earns its loss back within months. Malachite was wound down in March and never got that chance.

Research shows when this premium is small and when it is large. Before a spike, protection gets cheaper, not more expensive. [Cheng (2019)](https://academic.oup.com/rfs/article/32/1/180/5017289) finds that the premium built into VIX futures falls or stays flat while risk rises, because demand for hedging falls too, and [VIX futures were cheap just before both the 2008 crisis and the 2011 euro crisis, because buyers who had cashed out did not buy again](https://www.tuck.dartmouth.edu/news/articles/the-puzzling-market-for-stock-market-volatility-insurance). During a spike, selling volatility may not be rewarded at all. [Johnson (2017)](https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/risk-premia-and-the-vix-term-structure/56572D1F060448571BD8F597C732D9C3) shows that the slope of the VIX term structure (how implied volatility differs across maturities), not the level of the VIX, predicts returns on variance swaps, VIX futures and straddles, and [on the days with the lowest slope, when short-term volatility was priced above long-term volatility, owning variance paid off the next day in 17 of 18 asset–maturity combinations](https://www.cxoadvisory.com/volatility-effects/vix-term-structure-slope-and-variance-asset-future-returns/). The large rewards come after the shock: in stocks, [the price of variance risk rises sharply after shocks such as 1987 and 2008](https://www.fmg.ac.uk/sites/default/files/media/Malkhozov_0.pdf). In short, the premium is small before a spike, may be missing during it, and is largest after it.

The Tail Risk index showed the same pattern in reverse: up 37.44% in March, then down in seven of the next eight months, after losing 10.40% in 2019. The Long Volatility index did the same, going from +39.70% in the first quarter to [+27.37% by the end of August](https://www.benzinga.com/general/hedge-funds/20/09/17471050/volatility-hedge-funds-have-been-this-years-big-winners). A hedge that is never sold just goes up and comes back down. The most important skill of a tail fund is knowing when to sell its gains, not when to buy protection.

The Tail Risk index has a negative Sharpe ratio (return per unit of risk) and is still worth owning, because a good Sharpe ratio is not its purpose. Its [median rolling 12-month return is −7.41% and its correlation with MSCI World is −0.50](https://www.waystone.com/waystone-explores-negatively-correlated-strategies/), and it has [cost about 2.65% a year since 2008](https://mrzepczynski.blogspot.com/2020/10/cboe-eurekahedge-tail-risk-hedge-fund.html). The buyer pays roughly 3% a year for something that made 37% in the worst month of the decade.

Individual funds vary far more than the index:

- [Universa reported 3,612% for March 2020](https://www.bloomberg.com/news/articles/2020-04-08/taleb-advised-universa-tail-risk-fund-returned-3-600-in-march), and [LongTail Alpha's tail fund rose roughly tenfold, or 157% counting client cash held in reserve](https://www.bnnbloomberg.ca/another-tail-risk-hedge-fund-had-eye-popping-returns-in-march-1.1420209). Those are returns on the hedge itself, not on the whole portfolio. Universa recommends putting 3.33% of a portfolio in its fund; by its own calculation, a portfolio of 96.67% S&P 500 and 3.33% Universa [returned +0.4% in March 2020 against −12.4% for the index, and 11.5% a year since inception against 7.9%](https://files.advisorperspectives.com/articles/2020/07/13/empirical-support-for-tail-risk-strategies).
- Cambria's TAIL ETF, which holds Treasuries plus a ladder of out-of-the-money S&P 500 puts (puts that pay off only after a large fall), has [lost 44% since its 2017 launch](https://www.marketsentiment.co/p/tail-risk-hedging). The idea is the same as a tail fund's, but the method is simple and mechanical.
- 2024 was a calm year with one spike, and volatility-trading hedge funds [averaged +4.03%](https://globalmarkets.cib.bnpparibas/app/uploads/sites/4/2025/02/bnpparibas-hf-outlook-2025.pdf). On August 5 the VIX went from [16.36 at the end of July to 65.73 before the open, closed at 38.57 and was back at 14.80 by August 16](https://note.com/kyleberry/n/n69653af81a41). The ten largest short-volatility ETFs [lost $4.1 billion](https://www.nasdaq.com/articles/billions-lost-market-volatility-bet-vix-surge-hits-traders), and among the 25 volatility funds PivotalPath tracks, [those that were short volatility lost about 10% that day while the group as a whole gained 5.5–6.5%](https://hedgeweek.com/news/volatility-short-leaves-traders-nursing-big-losses-after-stock-market-plunge).

</details>

## Where short-volatility returns come from, and a free benchmark

Every short-volatility strategy earns money from the same source: implied volatility is usually higher than the volatility that follows, by about three points on average. This gap is called the volatility risk premium. The cheapest way to collect it is the Cboe PUT index, which simply sells S&P 500 put options every month. Since 1986 it has earned close to the S&P 500's return with about a third less volatility and a smaller drawdown. That is the bar. A short-volatility fund that cannot beat this free index after fees is not worth its fees.

{% include posts/shape-not-return/fig-3.html %}

The three pairs of bars sum up the case for selling volatility: nearly the same return as stocks, with about a third less volatility and a third smaller drawdown. The cost is the risk of occasional large losses, which these long-run averages hide.

<details class="more" markdown="1">
<summary>The numbers behind the benchmark</summary>

The gap between the VIX and the volatility realized over the following 30 days has [averaged 3.33 points since 2013](https://www.cboe.com/insights/posts/generating-income-and-managing-risk-cash-secured-put-writing-in-a-low-equity-return-environment). Even in 2025, April included, realized volatility came in [about 3 points below implied, in line with the average since 2000](https://earlyretirementnow.com/2026/01/30/options-trading-series-part-14-year-2025-review). About three points a year is all that short-volatility strategies have to work with.

The PUT index sells one-month S&P 500 puts at the current index level every month, and holds enough cash to cover them. From July 1986 to August 2023 it [returned 9.40% a year against 9.91% for the S&P 500, with 10.26% volatility against 15.38% and a −32.66% maximum drawdown against −50.96%, and it beat the index 95% of the time when the index's rolling one-year return was negative](https://www.webull.com/learn/courseware/ZwQNcy/Generating-Income-and-Managing-Risk-Cash-Secured-Put-Writing-in-a-Low-Equity-Return-Environment). Selling options systematically earns a return similar to stocks, but along a different path: steadier, more prone to sudden losses, and better in bear markets. These are returns before costs, and options are expensive to trade.

That makes PUT a free benchmark, and professional investors use it that way: a short-volatility fund earns its fees only if it beats both PUT and the Short Volatility index after adjusting for drawdowns. Many do not, which is part of why the category's average looks poor. Three points a year leave little room for the usual 2% management fee and 20% performance fee, plus trading costs.

</details>

## When and where the premium is earned

Three points is an average, and an average hides where the money is actually made. The premium is concentrated in three places:

1. **At night.** Holding options loses money mostly overnight. During the day, options on average earn a little back.
2. **In sharp moves that actually happen.** Investors pay a premium for protection against real, sudden moves. Protection against changes in expected future volatility has historically cost almost nothing.
3. **In long-shot options.** Part of the price of out-of-the-money options pays for leverage and the hope of a big win, not for insurance.

So two short-volatility funds with the same Sharpe ratio can be selling quite different products.

<details class="more" markdown="1">
<summary>The evidence for each</summary>

1. **Night.** [Muravyev and Ni](https://econpapers.repec.org/RePEc:eee:jfinec:v:136:y:2020:i:1:p:219-238) split the daily return on delta-hedged S&P 500 options (options hedged so that small moves in the index do not change their value) into two parts. The average loss of 0.7% a day breaks down into −1% from close to open and +0.3% from open to close, and the pattern holds across maturities, strike prices and single-stock options. This fits the idea that option prices do not account for stock volatility being much higher during the day than at night. [In the working-paper version](https://www.cxoadvisory.com/equity-options/intraday-versus-overnight-option-returns/), the two parts are about equally volatile and have similar extreme moves, so risk cannot explain the gap. Options are expensive at the close and cheap at the open. Selling them every day earned 0.7% a day before costs but lost 80% of capital in the financial crisis; selling only overnight earned 1.0% a day before costs and was positive in every three-month period, the crisis included. The crisis losses happened during trading hours. Weekends show the same pattern: [option returns are significantly lower over non-trading periods, mostly weekends, because of mispricing rather than risk](https://econpapers.repec.org/RePEc:bla:jfinan:v:73:y:2018:i:2:p:861-900), although [an earlier version found little of the effect in S&P 500 index options](https://www.cxoadvisory.com/?p=5800). All of these figures are before costs, use mid prices and mostly come from before SPX options traded overnight, and the effect may have weakened since publication. The cost of trading twice a day would eat it.
2. **Sharp moves that actually happen.** [Dew-Becker, Giglio, Le and Rodriguez](https://www.nber.org/papers/w21182.pdf) use variance swaps (contracts that pay according to realized volatility) of different maturities to separate realized variance from news about future variance. From 1996 to 2014, hedging news about variance at horizons from one quarter to 14 years cost nothing on average; only unexpected, short-lived realized variance carried a premium. Their example is the 2011 debt-ceiling fight. The one-month variance swap rose from 16.26 at the end of June to 25.96 at the end of July while realized volatility stayed near 15, and then August's realized volatility was 47.18. Across [19 option markets](https://www.nber.org/system/files/working_papers/w26323/w26323.pdf), the premium for exposure to actual price swings (gamma) is negative and the premium for exposure to changes in implied volatility (vega) is positive, and both become more extreme for options further out of the money. Investors pay to avoid the sharp move itself, not the fear of one.
3. **Long shots.** Options give leverage that some investors cannot get elsewhere, and [the more leverage an option offers, the lower its risk-adjusted return: a portfolio that buys low-leverage and sells high-leverage index options earns abnormal returns with a t-statistic of 6.3](https://nber.org/system/files/working_papers/w18558/w18558.pdf). Prediction markets offer a test with no economic risk at all. On Kalshi, [across more than 300,000 contracts, a 10-cent contract wins less than 10% of the time, takers (who accept posted prices) lose almost 32% on average and makers (who post them) about 10%, and the bias holds in politics, entertainment and economic-data contracts alike](https://cepr.org/voxeu/columns/economics-kalshi-prediction-market). Same-day options, known as 0DTE, show the same behavior: [about 75% of retail S&P 500 option trades are 0DTE, and since daily expiries began, retail has lost about $358,000 a day, roughly 60% of it to transaction costs](https://ssrn.com/abstract=4404704).

So a short-volatility fund sells two different things. The first is insurance: index puts near the current price, like the ones in the PUT index, which earn a premium for bearing the risk of sudden drops. The second is leverage and long shots: far out-of-the-money and very short-dated contracts, which earn a premium that has nothing to do with crash risk, as Kalshi's entertainment contracts show. And the gap between makers and takers shows that how well a fund trades is part of its return, not just a cost subtracted from it.

</details>

## What each type of fund does

Each category does a job that other assets do not. Short volatility earns an insurance-like profit that is separate from stock-market returns. Relative value earns a return that does not move with other assets. Long volatility and tail risk are the only exposures that pay out, by the terms of the contract, when stocks fall sharply. For the market as a whole, volatility funds take on risk that dealers no longer hold: most investors want to buy protection, dealers can no longer keep all the risk this creates, and someone has to hold it in exchange for a fee.

<details class="more" markdown="1">
<summary>Details and evidence</summary>

For the investor:

1. **Short volatility** offers a risk premium other than the stock-market return: the profit from selling insurance, which a standard 60/40 stock-bond portfolio does not earn.
2. **Relative value** offers returns with genuinely low correlation. A Sharpe ratio of 1.18 at 3.9% volatility with a 6.5% drawdown is rare among hedge fund strategies, and Dominicé found that [adding the Long Volatility and Relative Value Volatility indices to the S&P 500 gave about 7% a year at more than double the index's Sharpe ratio](https://www.dominice.com/news-performance-analysis-of-long-volatility-and-relative-value-volatility-strategies-2/). That low correlation cannot come from trading skew (the extra price of downside protection compared with upside bets). [Kozhan, Neuberger and Schneider](https://openaccess.city.ac.uk/id/eprint/15209/) find that almost half of one-month S&P 500 skew is a risk premium, but skew risk and variance risk are nearly the same risk: if you collect one while hedging out the other, the premium almost disappears. A relative-value fund that is net short skew is really short volatility, so its low correlation has to come from other trades, such as dispersion (index volatility against single-stock volatility), spreads between maturities or trades across asset classes.
3. **Long volatility and tail risk** are the only exposures that pay out by contract, and immediately, when stocks fall sharply. Bonds failed at that job in 2022, and [stocks and bonds have become more correlated](https://www.goldmansachs.com/insights/articles/hedge-funds-have-momentum-after-posting-double-digit-returns-last-year). The math behind this is sometimes called the volatility tax: long-run compound growth is roughly the average return minus half the variance, so deep losses do outsized damage (a 50% loss needs a 100% gain to recover). A hedge that costs about [$5 million a year per $1 billion protected](https://www.financial-planning.com/articles/calpers-missed-a-1-billion-payday-by-scrapping-market-hedge-ahead-of-the-coronavirus-outbreak) raises the long-run compound growth rate if it turns a −34% drawdown into −6%. An independent backtest of a Universa-style strategy on Cboe data from 2006 to 2020 [produced 11.0% a year, close to Universa's claimed 11.5% against 7.9% for the S&P 500](https://api.advisorperspectives.com/articles/2020/07/13/empirical-support-for-tail-risk-strategies). The hedge also lets an investor take more risk elsewhere, for example holding 100% in risky assets instead of 60/40, and it pays out exactly when assets are cheapest. CalPERS is the cautionary example: it [hired Universa and LongTail Alpha in 2017, then pulled its money out, and the Universa position it gave up returned about 3,600% in March 2020](https://www.bloombergquint.com/markets/calpers-forfeited-a-1-billion-payday-by-scrapping-market-hedge), more than $1 billion it could have used to buy assets at their lows.

For the market, the reason is structural. Demand for options is one-sided: institutions regularly buy index puts and sell calls, and structured products pass long-dated volatility and correlation risk to dealers. Since 2008, dealers have not been able to keep that much risk on their balance sheets, so someone else has to hold it, for a fee. Short-volatility funds lower the price of protection for everyone. Long-volatility funds supply liquidity in a crash, because they sell puts and VIX calls when they cash in. Relative-value funds keep option prices consistent across strikes, maturities, asset classes, and index and single-stock options. Even VIX exchange-traded products, which lose money steadily when they roll their futures in normal markets, need someone on the other side.

This role shows up in the data. [Chen, Joslin and Ni](https://www.nber.org/papers/w25573) measure dealer constraints from trading in far out-of-the-money index puts. When puts get more expensive while the public buys fewer of them, it is the dealers' supply that has tightened, and such periods bring more expensive options, higher risk premiums across assets, harder funding conditions and dealers cutting back their risk. [Barras and Malkhozov](https://www.bis.org/publ/work521.pdf) find that the variance risk premium measured in options and the one measured in stocks move together but are not the same; the gap tracks the financial health of banks and dealers and [at times exceeds 3% a year, twice the average premium itself](https://www.fmg.ac.uk/sites/default/files/media/Malkhozov_0.pdf). [Muravyev](https://doi.org/10.1111/jofi.12380) shows that market makers' inventory risk moves option prices more than informed trading does. So part of what a short-volatility fund earns is payment for using scarce dealer capacity. That payment is highest when dealers are constrained, which shows up as more expensive puts with fewer public buyers, and it should fall as income funds, quantitative investment strategies (QIS) and other short-volatility money pile in. That limits the size of the whole category, not just of any one fund.

Whether to use a fund or do it yourself is a practical question: margin, the risk measures known as Greeks, trading in thin far out-of-the-money options, and the discipline to take profits. The difference between good and bad execution of the same idea is the whole business. TAIL's −44% and Ambrus's +51.48% since 2022 are both called "buying tail protection." Demand is also rising: HFR counted [562 hedge fund launches in 2025, a four-year high, as investors added strategies positioned for higher volatility](https://www.hedgeweek.com/hedge-fund-launches-hit-four-year-high-as-investors-brace-for-volatility/), and Aberdeen's outlook for the second half of 2025 [turned positive on both relative-value and directional volatility strategies](https://www.aberdeeninvestments.com/en-us/institutional/insights-and-research/h2-2025-hedge-fund-outlook).

</details>

## The case against tail funds: AQR's view

The argument against tail funds is older than the argument for them. AQR's version is that insurance costs more over time than it pays out, and that trend following (buying assets that are rising and selling those that are falling) protects better in slow bear markets. The record splits by the speed of the crash: options did best in the fast crash of 2020, and trend following did best in the slow decline of 2022. Whether you need a tail fund depends on which kind of crash you worry about, and on the price you pay for protection.

<details class="more" markdown="1">
<summary>AQR’s argument and the evidence</summary>

AQR's 2011 paper ["Chasing Your Own Tail (Risk)"](https://caia.org/media/4891/download) argued that tail insurance costs more than it pays out and offered five alternatives: diversify by risk rather than by asset class, manage volatility actively, add uncorrelated alternative investments, use low-beta (less market-sensitive) stocks, and write a crisis plan in advance. [Ilmanen, Thapar, Tummala and Villalon (2021)](https://www.Aqr.Com/-/media/AQR/Documents/Journal-Articles/Journal-of-Systematic-Investing-Vol-1-Issue-1--Tail-Risk-Hedging-AQR.pdf?sc_lang=en) compared out-of-the-money index puts with trend following across asset classes and found a generally stronger case for trend following, except for investors who mainly fear fast drawdowns.

AQR's [2022 follow-up](https://www.wealthmanagement.com/equities/hedging-tail-risks-tortoise-versus-hare) showed the pattern. In the short February–March 2020 drawdown, tail-hedging funds and put buying did best; in the long drawdown that began in January 2022, trend following did best, and options-based strategies paid for their crash protection with negative long-run average returns. Harvey, Hoyle, Rattray, Sargaison, Taylor and Van Hemert (2019) found that continuously holding short-dated S&P 500 puts was the most reliable defense and also the most expensive, returning −7.4% over all periods. FactorResearch compared tail-risk funds with cash-like assets from 2007 to 2020 and found [similar risk-adjusted returns and drawdowns, with tail funds most in demand when they were least attractive](https://www.advisorperspectives.com/articles/2020/05/06/an-aqr-warning-and-a-3-612-return-fire-up-the-black-swan-debate).

Dean Curnutt of Macro Risk Advisors summed it up: tail hedging works, but the price matters a great deal.

</details>

## Ambrus Group: a tail fund that pays for its own protection

Ambrus Group runs what it calls a carry-neutral tail fund. It holds long-volatility positions that pay off in crashes, and it pays their running cost with profits from short-term, mostly intraday options trading. By its own numbers, it has been roughly flat in normal months and sharply up in tail events, and three event months produced almost all of its return over the past 24 months.

{% include posts/shape-not-return/table-ambrus.html %}

{% include posts/shape-not-return/fig-4.html %}

Read the chart from left to right: twenty-four months, three large steps. The nearly flat step for the other 21 months is the whole carry-neutral claim. Like every Ambrus number here, it is computed from the fund's self-reported figures.

The number to watch is size. Assets grew from about $50 million in 2024 to nearly $1 billion in 2026, while the firm itself once estimated its capacity at $500 million.

{% include posts/shape-not-return/fig-5.html %}

The dashed line is the firm's own capacity estimate. Every dollar above it is money that the cost-covering trades were not originally designed to support.

<details class="more" markdown="1">
<summary>How Ambrus runs the fund</summary>

Ambrus describes itself as a Chicago-style proprietary trading firm combined with a tail strategy. The flagship Ambrus Volatility Fund [launched in May 2022; the firm was incorporated in September 2020 and traded separately managed accounts from January 2021](https://www.open-funds.ch/sites/default/files/2025-05/202504%20NEW%20REVS.pdf). Co-chief investment officers [Kris Sidial](https://londonstrategicedge.com/directory/fintech-founders/kris-sidial/) (Xanthus Capital, Chimera Securities, nearly four years on BMO's exotic derivatives desk) and William Wise run the portfolio, and Sal Abbasi (Citadel, 2006–2012) runs quantitative risk. The fund uses no leverage and holds a large cash balance, and Sidial keeps [60% of his liquid net worth in the funds](https://www.opalesque.com/709388/tail_risk_strategy_profits_from_monetization_during938.html).

The return pattern matches what Sidial [told Forbes in 2022](https://www.forbes.com/sites/jacobwolinsky/2022/10/07/this-fund-manager-says-tail-risk-events-like-the-pandemic-are-only-going-to-increase/) the fund would do: flat to slightly down in normal markets, sharply up in tail events. Split the past 24 months, and the three event months compound to roughly +47% while the other 21 months add about +4% in total. In the data, the fund really does not lose money while it waits for a crash.

[The Hedge Fund Journal's 2024 profile](https://thehedgefundjournal.com/ambrus-groups-carry-neutral-tail-risk-hedge-fund/) sums up the fund's mandate in three points: keep the cost of holding protection as low as possible; take profits during volatility spikes, generally when the VIX is above 40; and always keep enough protection to pay off if volatility keeps rising. The portfolio has two parts. The first, which the firm calls loss mitigation, buys protection across VIX-related products (VIX options, index derivatives and exchange-traded products), choosing maturities and strike prices and watching market flows. It is built to pay 100–200 times its cost at the peak, which is what a VIX call bought with the VIX in the mid-teens pays if the index reaches 50–70. The second, called bleed mitigation because it offsets the steady cost of protection, is a set of mostly intraday, risk-limited strategies in standard listed options. They trade on hedging behavior, the term structure, intraday volume and overreactions in single stocks, with win rates and win/loss ratios only slightly better than a coin flip; the firm compares its edge to a casino's 51%. Most of that profit is spent on more protection. A minimum level of protection stays in place even when trading loses money, and more can be bought when a spike looks close.

The protection mostly sits in [listed options with two weeks to two months to expiry](https://podscripts.co/podcasts/the-derivative/the-kid-who-kaptures-kurtosis-with-kris-sidial-of-ambrus-group), based on the view that short-dated options carry extra volatility from dealer hedging and that large moves since 2017 have played out within six weeks. The fund buys skew and far out-of-the-money options on both sides when they are cheap, prefers single stocks and sectors where positioning is lopsided to plain S&P 500 puts, and accepts being wrong 70–80% of the time. In April 2025 its best trades were out-of-the-money S&P 500 options with one to two months to expiry and out-of-the-money VIX options with one to three months. Its short-volatility positions are always capped with option spreads; its long positions never are. The risk the firm fears most is that volatility rises while far out-of-the-money options fail to follow, so that both sides of the portfolio lose. Decisions on when to sell are judgment calls, weighing hedge fund and dealer positioning, the volatility of the VIX itself and the economic backdrop, but they follow one rule: first sell enough to recover the cost of the trade, then sell the rest in stages. Giving back profit is allowed; losing money on the trade is not.

Size is the variable to watch. In September 2024 the firm had raised about $50 million without a seed investor and put its capacity near $500 million. By spring 2025 firm assets were about $115 million, and its [Form ADV reports $485 million as of March 1, 2026](https://radientanalytics.com/firm/adv/the-ambrus-group-llc-316761), with the [main fund at $439.5 million from 157 investors and a $250,000 minimum investment](https://aum13f.com/firm/the-ambrus-group-llc). The April 2026 investor letter said assets were approaching $1 billion, that the fund would stop taking most new money from July 1, and that large multi-strategy hedge funds were among its investors. Wise has said that the bleed-mitigation profits are much harder to scale than the loss-mitigation side.

</details>

## Ambrus's view of market structure

Ambrus's strategy rests on one belief: since about 2017, swings in US stocks have been driven more by how the derivatives market works (dealer hedging, a steady supply of option selling and the way the VIX is calculated) than by economic fundamentals. August 2024 confirmed this view of how the market works, but four events are too few to confirm the firm's further prediction that crashes will now come twice as often. What remains is a trade with two parts. VIX spikes will be bigger relative to the fall in stocks, so own far out-of-the-money options and VIX calls. They will also be shorter, so sell into them.

{% include posts/shape-not-return/fig-6.html %}

The gap between the 65.7 reading and the futures line shows the problem. The index can jump far above any price that people actually trade at, and VIX calls are priced off VIX futures, not off the index.

<details class="more" markdown="1">
<summary>The details, and what the evidence shows</summary>

The firm's May 2022 paper, *Volatility and the Changing Market Structure Driving US Equities*, describes four self-reinforcing loops. First, when dealers are "short gamma," their hedging forces them to buy as prices rise and sell as they fall, which makes moves bigger; when they are "long gamma," their hedging does the opposite and dampens moves, and that long-gamma position comes from the many funds that sell options near the current price for income. Both exist at once, so markets stay calm until prices move far enough that dealers switch from calming the market to speeding it up; sudden gaps cannot be hedged at all. Second, structured products leave banks with positions that supply volatility in calm markets and need to buy it back when prices approach certain trigger levels. Third, passive, market-cap-weighted flows behave like momentum flows concentrated in a few large stocks. Fourth, rules introduced after 2008 removed the shock absorbers: dealers cannot hold much risk, liquidity comes from trading algorithms that pull back under stress, and the notional value of options traded now exceeds the volume of stock trading. The conclusion is not a crash prediction but a prediction about frequency: [events that used to happen once a market cycle will happen about twice as often](https://www.forbes.com/sites/jacobwolinsky/2022/10/07/this-fund-manager-says-tail-risk-events-like-the-pandemic-are-only-going-to-increase/).

Three other claims are easier to test.

**A steady supply of option selling.** Ambrus estimates that [the amount of short-volatility exposure has doubled since 2018 and assets in derivative-income funds have grown tenfold](https://thehedgefundjournal.com/ambrus-groups-carry-neutral-tail-risk-hedge-fund/), with multi-strategy hedge funds and quantitative dispersion trades adding to the pressure. Flows like these move prices: [an earlier version of Muravyev's paper](https://lfe.hse.ru/news/44287880.html) found that rolling positions at expiration creates enough selling pressure to push the prices of other options down 5.7%. Lower implied volatility makes protection cheap in calm periods. When the sellers are forced to cut their positions, they have to buy back, which causes a spike (even hedged short-volatility funds buy some exposure back), and then the same sellers return and push volatility down again. That is why spikes are V-shaped, and why the firm sells into them. But "cheap" needs a qualification. [Park](https://www.federalreserve.gov/pubs/feds/2013/201354/201354pap.pdf) finds that a rise in VVIX (the volatility of the VIX) makes out-of-the-money S&P 500 puts and VIX calls more expensive and lowers their returns over the next three to four weeks (a one-standard-deviation rise predicts next-day returns 1.32–2.19 percentage points lower on the puts and 0.68–1.01 lower on the calls), so far out-of-the-money options are cheap when VVIX is low. But a steep term structure, which is normal in calm markets, [predicts low returns on variance swaps, VIX futures and straddles](https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/risk-premia-and-the-vix-term-structure/56572D1F060448571BD8F597C732D9C3). Calm markets can make far out-of-the-money options cheap; they do not make options near the current price cheap.

**A VIX more prone to extreme jumps.** The firm's December 2022 paper argued that in the next extreme crash the VIX would reach levels never seen before. The index is calculated from the midpoints of bid and ask quotes across all out-of-the-money strikes, until it reaches two strikes in a row with no bids, and the growth of short-dated trading, plus fewer and larger market makers, had made the 23-to-37-day options it uses less liquid. On August 5, 2024 the VIX jumped from 23.9 to 42 within 15 seconds of the 3:15 a.m. pre-market open and passed 65 by 8:30, while front-month futures stayed below 35. An [SEC working paper](https://sec.gov/files/dera-vix-working-paper-2504.pdf) found that options with lower strikes entered the calculation (the lowest strike included fell from about 2,700 to as low as 1,400) but added at most 6 points. The main cause was inflated midpoints: the gap between the bid and ask prices of the 3,500-strike put widened from about $0.20 to more than $15, and for at-the-money puts from under $1 to $50 or more. The [BIS](https://www.bis.org/publ/bisbull95.htm) concluded that VIX ETFs and dispersion trades were unlikely to be the main cause. The firm was right about the index level but said nothing about the futures, and that matters for anyone holding VIX calls: the options are priced off the futures, so a spike that appears only in the index pays off only if it lasts past the open.

**0DTE options.** Ambrus's April 2023 paper, [*Dispelling False Narratives About 0DTE Options*](https://static1.squarespace.com/static/5f6299603ceb25330f902e7d/t/644beff4e8d2ee6519d85da2/1682698232481/Ambrus+Capital+-+Dispelling+False+Narratives+About+0DTE+Options.pdf), was written in response to JPMorgan's "Volmageddon 2.0" warning about same-day options. It surveyed ten market makers and concluded that institutions (advisers running overlay and income programs, market makers, investors hedging specific events, and volatility funds) dominate the trading. By its account, end users are net sellers on normal days, which leaves dealers long gamma and calms the market; the exception is a panic in which end users rush to buy puts. The paper estimated that on October 13, 2022, dealers would have had to sell more than $10 billion of S&P 500 exposure had the index fallen back to its intraday low. Its conclusion, that 0DTE options [speed volatility up but do not create it](https://issuu.com/gig2022/docs/srpinsights_q3_23_web/s/27053577), has held up. The August 2024 spike happened before the market opened, before that day's 0DTE options had traded, and [an academic study](https://ssrn.com/abstract=4692190) finds that large 0DTE gamma positions do not amplify price moves that have already happened. For a long-volatility firm, the same tool is useful: it can buy protection for the one day that matters instead of paying for a whole month. By February 2026, [0DTE contracts were 63% of SPX volume](https://www.pulse.bot/options-derivatives/news/how-0dte-options-can-explain-market-movement-611d9cb0-daa9-4f85-84d2-f40c9ebb3639).

What holds up is the mechanism: dealer hedging, the steady supply of option selling and the VIX calculation, all confirmed in August 2024. What does not hold up yet is the frequency prediction, which four events cannot settle; a theory that explains both long calm periods and sudden bursts says nothing about timing. The trade that remains has two parts. Spikes will be larger relative to the fall in stocks, so own far out-of-the-money options and VIX calls. They will also be shorter, so sell above a VIX of 40 or, based on the VVIX evidence, sell when the volatility of the VIX is high rather than at a fixed VIX level.

</details>

## Protection with no running cost still has a cost

Judge a tail fund the way Sidial himself suggests: compare its expected running cost with its expected payout in a crash defined in advance, and measure both on the investor's whole allocation. By that measure the two funds differ clearly. Per dollar of running cost, Ambrus is unbeatable; per dollar invested, Universa's crash payout was roughly five times larger. A fund that covers its own running cost gives up part of its crash payout. And because only sharp moves that actually happen carry a premium, protection that pays out in a sudden crash always costs something. Someone always pays. The only question is who.

<details class="more" markdown="1">
<summary>The full comparison and open questions</summary>

Sidial's own framework: divide the expected yearly running cost by the expected return in a crash; define the crash in advance (a 20% monthly fall in the S&P 500, or a VIX near 70); judge the fund like a goalkeeper, on saves rather than goals; hold it all the time; keep the position small; and measure returns on the investor's total allocation, not on the capital inside one trade.

Universa, at 3.33% of a portfolio, added roughly 13 percentage points in March 2020 (+0.4% for the hedged portfolio against −12.4% unhedged), at a running cost of about 0.5% a year of the amount protected. Ambrus made 25.21% on its own capital in April 2025 at a running cost near zero, so an investor holding it at 10% of a portfolio received about 2.5 points. Per dollar of running cost, Ambrus wins. Per dollar invested, Universa's crash payout is roughly five times larger, and the gap would grow in a 2008-style decline that lasts for months, because the rule of selling above a VIX of 40 and keeping only a minimum level of protection limits the payout, while pure protection keeps paying as the fall deepens. These are rough calculations on reported figures, not a like-for-like backtest. What a zero running cost buys is the ability to hold the strategy on its own, rather than as a cost to the rest of the portfolio.

This trade-off is not specific to Ambrus; it is how the market prices risk. If only sharp moves that actually happen carry a premium, any position that pays out by contract in a sudden crash has to cost something. So a long-volatility fund with no running cost has to use one or more of three things: protection that mostly profits from rises in implied volatility (vega), which is cheap or even earns a premium but does not pay out by contract in a sudden crash; a separate trading profit that pays for the protection; or a second premium earned on the side, such as selling volatility with capped risk. Ask the fund to show the three separately. The same evidence tests the view about short-dated options. On average, short-dated out-of-the-money options are the most expensive point on the curve, so if short-dated options really carry extra volatility, the contracts Ambrus picks have to beat that average. The way to check is to look at the long positions' realized volatility minus implied volatility on their own, before the profits from bleed mitigation.

Two questions remain open. The first is robustness. The bleed-mitigation strategies have been measured as uncorrelated in calm markets, but whether intraday profits survive several days of price gaps with very wide bid-ask spreads is untested, and if they failed, the fund would stop covering its costs exactly when its protection is paying out. If part of those profits comes from the day–night pattern (options cheap at the open, expensive at the close), they rest on a documented pricing anomaly rather than a casino's 51%, and it is fair to ask how much of the profit that pattern explains. The second is capacity: a firm that estimated its capacity at $500 million in 2024 is approaching $1 billion in 2026. If bleed mitigation cannot grow with it, either the short-volatility side grows and the fund drifts toward being a short-volatility fund, or it does not and the fund goes back to paying a running cost like an ordinary tail fund. The test is whether a year like 2023 still comes in at +1.7% with $1 billion under management.

</details>

In one sentence: a volatility fund sells a shape, meaning a pattern of gains and losses, and every shape has a price.

</div>

<div class="lang-block lang-zh" lang="zh-CN" markdown="1">

<p class="dedication">这篇文章献给我在 Citadel Securities 的一位非常好的朋友。Volatility 的各种概念和技巧，我都是从他那里学来的；VIX 期权和期货，也是我第一次认真接触的二级市场品种。</p>

<section class="abstract">
<h2 class="abstract-label">摘要</h2>
<p>波动率基金卖的其实不是收益，而是一种“形状”：什么时候赚钱、什么时候亏钱、赚亏各有多大。只看收益的话，CBOE Eurekahedge 的四类波动率指数里，三类表现平平，只有相对价值（relative value）一类好看；但这在很大程度上是策略本身的设计决定的。卖波动率（short vol）的基金靠卖期权赚钱，相当于卖保险：平时小额、稳定地赚，偶尔大亏一次。买波动率（long vol）和尾部风险（tail risk）基金靠买期权，相当于买保险：平时持续付出成本，市场急跌时大赚，所以该看的是每赔付一块钱要花多少成本。相对价值基金提供的是一样稀缺的东西：和其他资产几乎不相关的收益。</p>
<p>卖期权多赚的这部分收益，也不是均匀赚到的：它主要在夜里、在短期期权上赚到；风险积累的时候它变少，波动率飙升（spike）刚过去的时候它最多。文章最后看 Ambrus Group：一只自称已经基本不用为保护支付持续成本的尾部基金，以及它为此放弃了什么：同样投入一块钱，崩盘时它的赔付比传统的尾部基金少。</p>
</section>

## 四类波动率基金

“波动率基金”这个名字下面，其实是四类很不一样的基金。CBOE Eurekahedge 的指数把它们分成卖波动率（short volatility）、相对价值（relative value）、尾部风险（tail risk）和买波动率（long volatility）四类，数据回溯到 2005 年（尾部风险从 2008 年起）。它们不是同一种策略的不同版本，其中卖波动率和尾部风险两类，表现几乎正好相反。

{% include posts/shape-not-return/table-indices-zh.html %}

{% include posts/shape-not-return/fig-1-zh.html %}

这张图把表里看不出来的东西摆了出来。卖 put（也就是 Cboe PUT 指数的做法）和卖波动率的回撤跟股票差不多深，收益却比股票低。相对价值是唯一一类收益不错、回撤又小的。尾部风险的收益为负、回撤最深，这在意料之中：它是为了在崩盘时赔付而设计的，不是为了平时赚钱。

<details class="more" markdown="1">
<summary>指数数据的局限</summary>

1. **样本很小。** Short Volatility 指数[2015 年发布时有 15 只成分基金](https://www.hedgeweek.com/cboe-launches-hedge-fund-benchmarks-eurekahedge/)，到 2022 年初只剩 2 只；Relative Value 指数 2023 年有 9 只，Tail Risk 指数 2020 年有 7 只。两只基金的平均数，代表不了一整个类别。
2. **倒闭的基金不算在内。** 2018 年 2 月，XIV 一天跌了 90% 以上，随后清盘；LJM Preservation and Growth 两天亏掉约八成；2020 年 3 月，Malachite 和 Parplus 清盘，Allianz Structured Alpha 亏了约 70 亿美元。指数的 −31.75% 回撤，只是活下来的那些基金的回撤。
3. **几个月就能改变长期数字。** Long Volatility 指数“成立以来的年化收益”[在 2020 年 2 月底是 4.17%](https://hedgefundalpha.com/news/hedge-fund-managers-posted-strongest-monthly-outperformance-over-global-equities-since-2009/)，一个月后变成 5.38%。一个月，就改变了十五年的记录。

</details>

## 2020 年：同一场下跌，相反的结果

2020 年把这两种模式放在了同一张图上。Short Volatility 指数在 2 月和 3 月亏了约 26%，之后用大半年慢慢赚回来，全年接近持平；Tail Risk 指数 3 月赚了 37%，之后八个月里有七个月亏钱。由此可以得出两点。第一，卖波动率在飙升刚过去的时候最赚钱，但只有撑过飙升的基金才赚得到。第二，对冲头寸赚钱以后如果不卖掉，利润会原样还回去。

{% include posts/shape-not-return/fig-2-zh.html %}

<details class="more" markdown="1">
<summary>2020 年逐月数据，以及关于时机的研究</summary>

Short Volatility 指数 2 月 −12.53%，3 月 −15.85%，然后 4 月 +9.10%、7 月 +12.36%、8 月 +6.84%、9 月 +5.12%，全年 −0.80%。原因是：飙升之后，隐含波动率（期权价格里包含的波动率）比实际波动率（市场实际的波动）回落得慢，所以卖期权多赚的那部分收益，在飙升之后的几周里最多。撑过飙升的基金，几个月就能把亏损赚回来；Malachite 在 3 月就清盘了，没有等到这个机会。

研究也说明了这份溢价什么时候少、什么时候多。飙升之前，保护反而变便宜：[Cheng（2019）](https://academic.oup.com/rfs/article/32/1/180/5017289)发现，风险上升时，VIX 期货价格里包含的溢价下降或持平，因为对冲的需求也在下降；[2008 年金融危机和 2011 年欧债危机前夕，VIX 期货都很便宜，因为之前买了保护的人兑现之后没有再买](https://www.tuck.dartmouth.edu/news/articles/the-puzzling-market-for-stock-market-volatility-insurance)。飙升当中，卖波动率可能完全拿不到回报：[Johnson（2017）](https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/risk-premia-and-the-vix-term-structure/56572D1F060448571BD8F597C732D9C3)发现，能预测方差互换、VIX 期货和跨式组合收益的，是 VIX 期限结构（不同到期日的隐含波动率）的斜率，而不是 VIX 的高低；[在斜率最低、短期波动率高于长期波动率的那些日子里，18 个资产和期限组合中有 17 个，做多方差的次日收益为正](https://www.cxoadvisory.com/volatility-effects/vix-term-structure-slope-and-variance-asset-future-returns/)。冲击过后，回报才变大：在股票市场，[方差风险的价格在 1987 年、2008 年这类冲击之后急剧上升](https://www.fmg.ac.uk/sites/default/files/media/Malkhozov_0.pdf)。总结起来：飙升之前溢价少，飙升当中可能没有，飙升之后最多。

Tail Risk 指数正好相反：3 月 +37.44%，之后八个月里有七个月为负；再往前，2019 年全年是 −10.40%。Long Volatility 指数也一样：一季度 +39.70%，[到 8 月底只剩 +27.37%](https://www.benzinga.com/general/hedge-funds/20/09/17471050/volatility-hedge-funds-have-been-this-years-big-winners)。对冲头寸如果一直不卖，就只是涨上去又跌回来。尾部基金最重要的本事，是知道什么时候卖掉赚到的钱，而不是什么时候买保护。

Tail Risk 指数的夏普比率（每承担一单位风险换来的收益）是负的，但它依然值得持有，因为它的目的本来就不是夏普比率。它的[滚动 12 个月收益中位数是 −7.41%，与 MSCI World 的相关性是 −0.50](https://www.waystone.com/waystone-explores-negatively-correlated-strategies/)；[2008 年以来每年大约花掉 2.65%](https://mrzepczynski.blogspot.com/2020/10/cboe-eurekahedge-tail-risk-hedge-fund.html)。买家每年付大约 3%，换来的是：十年里最差的那个月，它赚了 37%。

单只基金之间的差别，比指数大得多：

- [Universa 2020 年 3 月的回报是 3,612%](https://www.bloomberg.com/news/articles/2020-04-08/taleb-advised-universa-tail-risk-fund-returned-3-600-in-march)；[LongTail Alpha 的尾部基金涨了约 10 倍，算上客户留作备用的现金是 157%](https://www.bnnbloomberg.ca/another-tail-risk-hedge-fund-had-eye-popping-returns-in-march-1.1420209)。这是对冲部分本身的回报，不是整个组合的。Universa 建议只配 3.33%；按它自己的测算，96.67% S&P 500 加 3.33% Universa 的组合，[2020 年 3 月是 +0.4%（同月 S&P 500 是 −12.4%），成立以来年化 11.5%，S&P 500 是 7.9%](https://files.advisorperspectives.com/articles/2020/07/13/empirical-support-for-tail-risk-strategies)。
- Cambria 的 TAIL ETF 在国债之上，持有一组不同行权价的虚值 S&P 500 put（只有大跌之后才会赔付），[自 2017 年成立以来累计亏了 44%](https://www.marketsentiment.co/p/tail-risk-hedging)。想法和尾部基金一样，只是做法简单、机械。
- 2024 年整体平静，只有一次飙升，波动率交易对冲基金[平均 +4.03%](https://globalmarkets.cib.bnpparibas/app/uploads/sites/4/2025/02/bnpparibas-hf-outlook-2025.pdf)。8 月 5 日，VIX [从 7 月 31 日的 16.36 冲到盘前的 65.73，当天收在 38.57，8 月 16 日回到 14.80](https://note.com/kyleberry/n/n69653af81a41)；最大的十只卖波动率 ETF [亏了 41 亿美元](https://www.nasdaq.com/articles/billions-lost-market-volatility-bet-vix-surge-hits-traders)；PivotalPath 跟踪的 25 只波动率基金里，[卖波动率的那些当天亏了约 10%，整组却赚了 5.5% 到 6.5%](https://hedgeweek.com/news/volatility-short-leaves-traders-nursing-big-losses-after-stock-market-plunge)。

</details>

## 卖波动率的收益从哪来，以及一个免费的比较基准

所有卖波动率的策略，赚的都是同一样东西：隐含波动率通常比之后的实际波动率高，平均高约 3 个点。这个差距叫波动率风险溢价。赚这份钱最便宜的办法是 Cboe PUT 指数，它每个月机械地卖出 S&P 500 的 put。1986 年以来，它的收益接近 S&P 500，波动少了约三分之一，回撤也更小。这就是门槛：扣完费用还跑不赢这个免费指数的卖波动率基金，不值得付费。

{% include posts/shape-not-return/fig-3-zh.html %}

这三组柱子就是卖波动率的全部卖点：收益和股票差不多，波动少约三分之一，回撤也小约三分之一。代价是偶尔会有很大的亏损，而长期平均数把它藏起来了。

<details class="more" markdown="1">
<summary>比较基准背后的数字</summary>

VIX 与随后 30 天实际波动率之间的差距，[2013 年以来平均是 3.33 个点](https://www.cboe.com/insights/posts/generating-income-and-managing-risk-cash-secured-put-writing-in-a-low-equity-return-environment)；2025 年即使算上 4 月，实际波动率仍然[比隐含波动率低约 3 个点，和 2000 年以来的平均差距一致](https://earlyretirementnow.com/2026/01/30/options-trading-series-part-14-year-2025-review)。每年 3 个点左右，就是卖波动率策略能用的全部原料。

PUT 指数的做法是：每个月卖出一个月后到期、行权价等于当前指数点位的 S&P 500 put，并留足现金作抵押。1986 年 7 月到 2023 年 8 月，它[年化 9.40%，S&P 500 是 9.91%；波动率 10.26% 对 15.38%；最大回撤 −32.66% 对 −50.96%；在 S&P 500 滚动一年收益为负的时候，95% 的时间跑赢指数](https://www.webull.com/learn/courseware/ZwQNcy/Generating-Income-and-Managing-Risk-Cash-Secured-Put-Writing-in-a-Low-Equity-Return-Environment)。系统性地卖期权，赚到的是一份接近股票的回报，只是走的路不同：更平稳，但更容易突然大亏，熊市里相对更好。这些都是扣除成本之前的收益，而期权的交易成本不低。

所以 PUT 是一个免费的比较基准，专业投资人也确实这么用：一只卖波动率基金，只有在按回撤调整之后，同时跑赢 PUT 指数和 Short Volatility 指数，才对得起它收的费用。很多基金做不到，这也是这一类平均数据难看的原因之一：每年 3 个点，装不下常见的 2% 管理费和 20% 业绩提成，再加上交易成本。

</details>

## 这份溢价在什么时候、什么地方赚到

3 个点是平均数，而平均数看不出钱到底是在哪里赚的。这份溢价主要集中在三个地方：

1. **夜里。** 持有期权主要在隔夜亏钱；白天，期权平均还能赚回一点。
2. **真正发生的大幅波动上。** 投资人愿意多付钱，是为真实、突然的大幅波动买保护；为“未来波动可能变大”这种预期做对冲，历史上几乎不花钱。
3. **小概率、高赔率的期权上。** 虚值期权的价格里，有一部分买的是杠杆和以小博大的希望，而不是保险。

所以，夏普比率相同的两只卖波动率基金，卖的可能是完全不同的产品。

<details class="more" markdown="1">
<summary>三点各自的证据</summary>

1. **夜里。** [Muravyev 和 Ni](https://econpapers.repec.org/RePEc:eee:jfinec:v:136:y:2020:i:1:p:219-238) 把做了 delta 对冲（对冲掉指数小幅涨跌的影响）的 S&P 500 期权的日收益拆成两段：平均每天 −0.7%，其中收盘到开盘 −1%，开盘到收盘 +0.3%；不同期限、不同行权价和个股期权都是这样。这符合一种解释：期权定价没有考虑到股票白天的波动远大于夜间。[在工作论文版本里](https://www.cxoadvisory.com/equity-options/intraday-versus-overnight-option-returns/)，两段的波动和极端情况都差不多，所以风险解释不了这个差距：期权在收盘时偏贵，开盘时偏便宜。每天卖期权，平均每天毛赚 0.7%，却在金融危机中亏掉了 80% 的本金；只在隔夜卖，平均每天毛赚 1.0%，而且任何一个 3 个月的区间（包括危机期间）都是正收益。危机中的亏损发生在白天的交易时段。周末也是一样：[期权在非交易时段（主要是周末）的收益明显更低，原因是定价错误而不是风险](https://econpapers.repec.org/RePEc:bla:jfinan:v:73:y:2018:i:2:p:861-900)，不过[更早的版本发现，这个效应在 S&P 500 指数期权上很弱](https://www.cxoadvisory.com/?p=5800)。以上都是按中间价计算、扣除成本之前的收益，样本大多在 SPX 期权开放夜盘交易之前，论文发表之后效应也可能已经减弱；一天交易两次的成本，就足以把它吃光。
2. **真正发生的大幅波动。** [Dew-Becker、Giglio、Le 和 Rodriguez](https://www.nber.org/papers/w21182.pdf) 用不同期限的方差互换（按实际波动结算的合约），把实际发生的波动和“关于未来波动的消息”分开。1996–2014 年，对冲一个季度到 14 年期限上的这类消息，平均不花钱；只有意外、短暂的实际波动带有溢价。他们举的例子是 2011 年的美国债务上限之争：1 个月期方差互换从 6 月底的 16.26 涨到 7 月底的 25.96，实际波动却一直在 15 左右；然后 8 月的实际波动达到 47.18。在 [19 个期权市场](https://www.nber.org/system/files/working_papers/w26323/w26323.pdf)里，为实际价格波动（gamma）付出的溢价为负，为隐含波动率变化（vega）付出的溢价为正，而且越是深度虚值越明显。市场花钱躲的，是真正的那一下大跌，而不是对大跌的担心。
3. **小概率、高赔率。** 期权自带杠杆，有些投资人在别处拿不到这种杠杆；而[期权内含的杠杆越高，风险调整后的收益越低：买入低杠杆、卖出高杠杆指数期权的组合，超额收益的 t 值为 6.3](https://nber.org/system/files/working_papers/w18558/w18558.pdf)。预测市场提供了一个完全没有经济风险的对照：在 Kalshi 上，[30 多万份合约里，10 美分的合约赢的概率低于 10%，接受挂价的一方（吃单方）平均亏近 32%，挂价的一方（挂单方）约 10%，而且政治、娱乐和经济数据类合约都有这种偏差](https://cepr.org/voxeu/columns/economics-kalshi-prediction-market)。当天到期的期权（0DTE）也是同样的情况：[散户在 S&P 500 期权上约 75% 的交易是 0DTE，每日到期的期权推出以来，散户平均每天亏约 35.8 万美元，其中约六成是交易成本](https://ssrn.com/abstract=4404704)。

所以，一只卖波动率基金其实卖了两样东西。一样是保险，也就是行权价接近当前点位的指数 put（PUT 指数卖的就是这种），赚的是承担突然大跌风险的钱。另一样是杠杆和小概率、高赔率的合约，也就是深度虚值和超短期的合约，这部分溢价和崩盘风险没有关系，Kalshi 的娱乐类合约就是证明。挂单方和吃单方之间的差距还说明，交易执行本身就是收益的一部分，而不只是从收益里扣掉的成本。

</details>

## 每类基金的作用

每一类都在做别的资产做不了的事。卖波动率赚的是类似卖保险的利润，和股市本身的涨跌是两回事。相对价值的收益不跟着别的资产一起涨跌。股票突然大跌时，只有买波动率和尾部风险基金的赔付是由合约保证的。对整个市场来说，波动率基金接过了交易商不再承担的风险：大多数投资人想买保护，交易商已经没法把由此产生的风险都留在自己手里，总得有人收一笔费用，把这些风险接过来。

<details class="more" markdown="1">
<summary>细节与证据</summary>

对投资人来说：

1. **卖波动率** 提供的是股市回报之外的另一种风险溢价，也就是卖保险的利润，普通的 60/40 股债组合赚不到。
2. **相对价值** 提供真正低相关的收益。夏普比率 1.18、年化波动 3.9%、回撤 6.5%，在对冲基金策略里很少见；Dominicé 发现，[S&P 500 加上 Long Volatility 和 Relative Value Volatility 指数之后，组合年化约 7%，夏普比率是指数的两倍以上](https://www.dominice.com/news-performance-analysis-of-long-volatility-and-relative-value-volatility-strategies-2/)。不过，这份低相关不可能来自交易偏度（skew，也就是下跌保护比上涨押注贵出来的那部分）。[Kozhan、Neuberger 和 Schneider](https://openaccess.city.ac.uk/id/eprint/15209/) 发现，1 个月期 S&P 500 偏度里将近一半是风险溢价，但偏度风险和方差风险几乎是同一种风险：只赚其中一个、对冲掉另一个，溢价就几乎没有了。净卖出偏度的相对价值基金，实际上是在卖波动率，所以它的低相关只能来自别的交易，比如指数和个股波动率之间的价差交易（dispersion）、不同到期日之间的价差，或者跨资产的交易。
3. **买波动率和尾部风险** 是唯一一类在股票突然大跌时，由合约保证、并且马上赔付的头寸。债券在 2022 年没能做到这一点，[股票和债券的相关性也在上升](https://www.goldmansachs.com/insights/articles/hedge-funds-have-momentum-after-posting-double-digit-returns-last-year)。背后的数学道理有时被叫作“波动率税”：长期复利增长率约等于平均收益减去方差的一半，所以深度回撤对长期收益的伤害特别大（亏 50% 要涨 100% 才能回本）。一个对冲如果每年的成本约为[每保护 10 亿美元花 500 万美元](https://www.financial-planning.com/articles/calpers-missed-a-1-billion-payday-by-scrapping-market-hedge-ahead-of-the-coronavirus-outbreak)，又能把 −34% 的回撤变成 −6%，长期复利收益率反而会更高。有人用 2006–2020 年的 Cboe 期权数据，独立复制了 Universa 式的策略，[得到年化 11.0%，与 Universa 自称的 11.5%（S&P 500 为 7.9%）基本一致](https://api.advisorperspectives.com/articles/2020/07/13/empirical-support-for-tail-risk-strategies)。对冲还能让投资人在别处承担更多风险，比如 100% 持有风险资产，而不是 60/40，而且赔付恰好在资产最便宜的时候到账。CalPERS 是一个反面例子：它[2017 年聘请了 Universa 和 LongTail Alpha 做尾部保护，后来撤出，被放弃的 Universa 头寸在 2020 年 3 月回报约 3,600%](https://www.bloombergquint.com/markets/calpers-forfeited-a-1-billion-payday-by-scrapping-market-hedge)，相当于错过了超过 10 亿美元，而这笔钱本可以用来在低点买入资产。

对市场来说，原因是结构性的。期权需求是单向的：机构长期买入指数 put、卖出 call，结构化产品又把长期的波动率风险和相关性风险转给了交易商。2008 年以后，交易商的资产负债表已经承担不了这么多风险，只能由别人收费接手。卖波动率基金降低了所有人买保护的价格。买波动率基金在崩盘中卖掉手里的 put 和 VIX call 兑现利润，成为那时少有的流动性提供者。相对价值基金让不同行权价、不同期限、不同资产，以及指数和个股之间的期权价格保持一致。就连在正常市场里滚动期货、长期亏钱的 VIX ETP，也需要有人站在对面。

这个角色在数据里看得到。[Chen、Joslin 和 Ni](https://www.nber.org/papers/w25573) 从深度虚值指数 put 的交易里，测量交易商受到的约束：put 变贵、同时公众买得更少，说明是交易商的供给变紧了；这种时期往往伴随着期权更贵、各类资产的风险溢价上升、融资更难，以及交易商降低风险。[Barras 和 Malkhozov](https://www.bis.org/publ/work521.pdf) 发现，在期权市场和在股票市场分别测出来的方差风险溢价，走势一致，但并不相同；两者之间的差距随着银行和交易商的财务状况变化，[有时超过每年 3%，是平均溢价本身的两倍](https://www.fmg.ac.uk/sites/default/files/media/Malkhozov_0.pdf)。[Muravyev](https://doi.org/10.1111/jofi.12380) 发现，做市商的库存风险对期权价格的影响，比知情交易还大。所以，卖波动率基金赚的钱，有一部分其实是使用交易商稀缺资本的报酬。交易商受约束时，这份报酬最高（表现为 put 更贵、公众买得更少）；收益类基金、量化策略（QIS）和其他卖波动率的资金大量进来时，它应该下降。这限制的是整个类别的规模，而不只是某一只基金的规模。

交给基金做还是自己做，是一个操作问题：保证金、各种风险指标（Greeks）、在流动性很差的深度虚值期权里交易，以及按纪律兑现利润。同一个想法，做得好和做得差，差别就是这门生意的全部：TAIL 的 −44% 和 Ambrus 2022 年以来的 +51.48%，都叫“买尾部保护”。需求也在上升：HFR 统计，[2025 年新发对冲基金 562 只，是四年来最多，投资人加配了押注波动率上升的策略](https://www.hedgeweek.com/hedge-fund-launches-hit-four-year-high-as-investors-brace-for-volatility/)；Aberdeen 对 2025 年下半年的展望，[对相对价值和方向性的波动率策略都转为看好](https://www.aberdeeninvestments.com/en-us/institutional/insights-and-research/h2-2025-hedge-fund-outlook)。

</details>

## 反对意见：AQR 的看法

反对尾部基金的论证，比支持它的论证还要早。AQR 的观点是：保险的长期成本高于赔付，而在缓慢下跌的熊市里，趋势跟踪（买入正在上涨的资产、卖出正在下跌的资产）防守得更好。历史数据按下跌的速度分成两种情况：2020 年的快速崩盘里期权表现最好，2022 年的缓慢下跌里趋势跟踪表现最好。需不需要尾部基金，取决于你担心的是哪一种下跌，以及你买保护的价格。

<details class="more" markdown="1">
<summary>AQR 的论证与证据</summary>

AQR 2011 年的论文 [*Chasing Your Own Tail (Risk)*](https://caia.org/media/4891/download) 认为，尾部保险的长期成本高于赔付，并给出了五种替代办法：按风险而不是按资产类别分散、主动管理波动、加入低相关的另类资产、使用低 beta（对大盘不太敏感的）股票，以及事先写好危机预案。[Ilmanen、Thapar、Tummala 和 Villalon（2021）](https://www.Aqr.Com/-/media/AQR/Documents/Journal-Articles/Journal-of-Systematic-Investing-Vol-1-Issue-1--Tail-Risk-Hedging-AQR.pdf?sc_lang=en)比较了虚值指数 put 和跨资产的趋势跟踪，结论是总体上趋势跟踪更有说服力，除非投资人最担心的是快速下跌。

AQR [2022 年的后续研究](https://www.wealthmanagement.com/equities/hedging-tail-risks-tortoise-versus-hare)把规律摆了出来：2020 年 2–3 月的短暂下跌里，尾部对冲基金和买 put 表现最好；2022 年 1 月开始的漫长下跌里，趋势跟踪表现最好，而期权类策略的崩盘保护，是用长期为负的平均回报换来的。Harvey、Hoyle、Rattray、Sargaison、Taylor 和 Van Hemert（2019）发现，持续持有短期 S&P 500 put 是最可靠的防御，也是最贵的，全样本回报为 −7.4%。FactorResearch 比较了 2007–2020 年的尾部风险基金和类现金资产，发现[两者的风险调整后收益和回撤差不多，而尾部基金往往在最不划算的时候最受追捧](https://www.advisorperspectives.com/articles/2020/05/06/an-aqr-warning-and-a-3-612-return-fire-up-the-black-swan-debate)。

Macro Risk Advisors 的 Dean Curnutt 一句话总结：尾部对冲是有效的，但价格非常重要。

</details>

## Ambrus Group：用交易利润支付保护成本的尾部基金

Ambrus Group 运营的是一只它称为 carry-neutral 的尾部基金：它持有在崩盘中赚钱的买波动率头寸，再用短期、以日内为主的期权交易利润，支付这些头寸的持续成本。按它自己公布的数字，它在正常月份大致持平，在尾部事件中大涨；过去 24 个月的收益，几乎全部来自三个事件月。

{% include posts/shape-not-return/table-ambrus-zh.html %}

{% include posts/shape-not-return/fig-4-zh.html %}

从左往右看：二十四个月，三级台阶。几乎走平的“其余 21 个月”，就是 carry-neutral 这个说法的全部依据。和文中所有关于 Ambrus 的数字一样，它是根据基金自己公布的数据算出来的。

真正要关注的是规模：资产从 2024 年的约 5000 万美元增长到 2026 年的接近 10 亿美元，而公司自己曾经估计的容量是 5 亿美元。

{% include posts/shape-not-return/fig-5-zh.html %}

虚线是公司自己估计的容量。线以上的每一块钱，都超出了那部分用来覆盖保护成本的交易当初的设计规模。

<details class="more" markdown="1">
<summary>Ambrus 怎么运作</summary>

Ambrus 自称是一家芝加哥风格的自营交易公司，再加上一套尾部策略。旗舰基金 Ambrus Volatility Fund [2022 年 5 月成立；公司 2020 年 9 月注册，2021 年 1 月起通过独立管理账户（SMA）交易](https://www.open-funds.ch/sites/default/files/2025-05/202504%20NEW%20REVS.pdf)。联合首席投资官 [Kris Sidial](https://londonstrategicedge.com/directory/fintech-founders/kris-sidial/)（曾在 Xanthus Capital、Chimera Securities 做自营，在 BMO 的奇异衍生品交易台工作近四年）和 William Wise 管理投资组合；Sal Abbasi（2006–2012 年在 Citadel）负责量化风控。基金不加杠杆，账上留着大量现金；Sidial 把[自己 60% 的流动净资产放在基金里](https://www.opalesque.com/709388/tail_risk_strategy_profits_from_monetization_during938.html)。

它的收益模式和 Sidial [2022 年对 Forbes 说的](https://www.forbes.com/sites/jacobwolinsky/2022/10/07/this-fund-manager-says-tail-risk-events-like-the-pandemic-are-only-going-to-increase/)一致：正常市场里持平到小亏，尾部事件中大涨。把过去 24 个月拆开：三个事件月复利下来约 +47%，其余 21 个月合计约 +4%。从数据看，它在等待崩盘的时候确实没有亏钱。

[The Hedge Fund Journal 2024 年的报道](https://thehedgefundjournal.com/ambrus-groups-carry-neutral-tail-risk-hedge-fund/)把基金的任务概括为三点：把持有保护的成本压到最低；在波动率飙升时兑现利润，原则上是在 VIX 超过 40 的时候；始终保留足够的保护，以防波动率继续上升。投资组合分两部分。第一部分公司称为 loss mitigation（减少损失），在各种 VIX 相关产品（VIX 期权、指数衍生品和 ETP）里买保护，挑选期限和行权价，并关注资金流向；它的设计是在最高点赔付成本的 100–200 倍，相当于在 VIX 十几的时候买入的 VIX call，在 VIX 涨到 50–70 时的赔付。第二部分叫 bleed mitigation，因为它用来抵消持有保护的日常成本（业内叫 bleed）；这是一组以日内为主、有风险上限的策略，只用普通的上市期权，交易的是对冲行为、期限结构、日内成交量和个股的过度反应，胜率和盈亏比只比抛硬币好一点，公司把自己的优势比作赌场的 51%。这部分利润大多用来买更多保护。即使交易亏钱，也会保留一个最低限度的保护；判断飙升临近时，还可以加买。

保护头寸主要放在[两周到两个月到期的上市期权](https://podscripts.co/podcasts/the-derivative/the-kid-who-kaptures-kurtosis-with-kris-sidial-of-ambrus-group)里，依据是：短期期权因为交易商的对冲而带有额外的波动，而且 2017 年以来的大行情大多在六周内走完。基金在便宜的时候买入两侧的偏度和深度虚值期权；比起单纯的 S&P 500 put，它更偏好持仓失衡的个股和板块，并且接受自己 70–80% 的时候是错的。2025 年 4 月最赚钱的交易，是一到两个月到期的虚值 S&P 500 合约，以及一到三个月到期的虚值 VIX 合约。卖出的波动率头寸一律用价差组合限定风险，买入的头寸从不设上限。公司最怕的情况是：波动率上升了，深度虚值期权却没有跟着涨，结果两边同时亏钱。什么时候卖靠判断，要综合考虑对冲基金和交易商的持仓、VIX 本身的波动和基本面，但有一条规则：先卖出足够收回这笔交易成本的部分，再分批卖出其余部分。可以吐回利润，但不允许整笔交易亏钱。

规模是最需要关注的变量。2024 年 9 月，公司在没有种子投资人的情况下募集了约 5000 万美元，并估计自己的容量约 5 亿美元。2025 年春，公司资产约 1.15 亿美元；[Form ADV 显示，截至 2026 年 3 月 1 日为 4.85 亿美元](https://radientanalytics.com/firm/adv/the-ambrus-group-llc-316761)，其中[主基金 4.395 亿美元，来自 157 个投资人，起投金额 25 万美元](https://aum13f.com/firm/the-ambrus-group-llc)。2026 年 4 月的投资者信说，资产正在逼近 10 亿美元，7 月 1 日起基本不再接受新资金，大型多策略对冲基金也在投资人之列。Wise 说过，bleed mitigation 这部分的利润，远不如 loss mitigation 那部分容易扩大规模。

</details>

## Ambrus 对市场结构的判断

Ambrus 的策略建立在一个判断上：大约 2017 年以后，美股的波动更多是由衍生品市场的运作方式造成的（交易商的对冲、源源不断的期权卖盘，以及 VIX 的计算方法），而不是由经济基本面造成的。2024 年 8 月证实了这套机制；但仅凭四次事件，还不足以证实公司更进一步的预测，即崩盘的频率会翻倍。剩下能用于交易的结论有两点：VIX 飙升的幅度相对于股市的跌幅会更大，所以持有深度虚值期权和 VIX call；飙升持续的时间也会更短，所以在飙升中卖出。

{% include posts/shape-not-return/fig-6-zh.html %}

65.7 这个点位和期货那条线之间的差距，说明了问题所在：VIX 指数可以冲到远高于任何实际成交价的位置，而 VIX call 的价格跟着 VIX 期货走，不是跟着指数本身走。

<details class="more" markdown="1">
<summary>细节，以及证据支持什么</summary>

公司 2022 年 5 月的论文 *Volatility and the Changing Market Structure Driving US Equities* 描述了四个自我强化的循环。第一，交易商处于“short gamma”时，对冲要求他们在上涨时买入、下跌时卖出，会放大行情；处于“long gamma”时，对冲的方向正好相反，会压住行情，而这类头寸来自大量为了收入而卖出平值附近期权的基金。两种情况同时存在，所以市场会一直平静，直到价格走得足够远，交易商从压住行情变成推动行情；跳空则完全无法对冲。第二，结构化产品给银行留下了一些头寸，平静时向市场提供波动率，价格接近某些触发点时，反过来需要买回波动率。第三，被动的、按市值加权的资金流，实际上是集中在少数几只大股票上的动量资金。第四，2008 年以后的监管拆掉了缓冲：交易商不能承担太多风险；流动性来自交易算法，而算法在市场紧张时会撤单；期权交易的名义金额已经超过了股票的成交额。结论不是预测崩盘，而是预测频率：[以前每个市场周期发生一次的事件，频率会翻倍](https://www.forbes.com/sites/jacobwolinsky/2022/10/07/this-fund-manager-says-tail-risk-events-like-the-pandemic-are-only-going-to-increase/)。

另外三个判断更容易检验。

**源源不断的期权卖盘。** Ambrus 估计，[2018 年以来卖出波动率的规模翻了一倍，衍生品收益类基金的资产增长了十倍](https://thehedgefundjournal.com/ambrus-groups-carry-neutral-tail-risk-hedge-fund/)，多策略对冲基金和量化的 dispersion 交易还在继续加大这股压力。这类资金流会影响价格：[Muravyev 论文的早期版本](https://lfe.hse.ru/news/44287880.html)发现，到期时的展期卖压，足以让其他到期日的期权价格下跌 5.7%。被压低的隐含波动率，让保护在平静时期变得便宜；一旦卖方被迫减仓，就不得不买回，从而引发飙升（即使做了对冲的卖波动率基金也要买回一部分），之后同一批卖方回来，再把波动率压下去。这就是飙升呈 V 形、公司也在飙升中卖出的原因。不过，“便宜”要打个折扣。[Park](https://www.federalreserve.gov/pubs/feds/2013/201354/201354pap.pdf) 发现，VVIX（VIX 本身的波动率）上升，会让虚值 S&P 500 put 和 VIX call 变贵，并压低它们随后三到四周的收益（VVIX 每上升一个标准差，次日 put 的收益低 1.32–2.19 个百分点，call 低 0.68–1.01 个百分点），所以 VVIX 低的时候，深度虚值期权便宜。但陡峭的期限结构，也就是平静市场的常态，[预示着方差互换、VIX 期货和跨式组合的低收益](https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/risk-premia-and-the-vix-term-structure/56572D1F060448571BD8F597C732D9C3)。平静可以让深度虚值期权变便宜，却不会让平值附近的期权变便宜。

**更容易出现极端跳动的 VIX。** 公司 2022 年 12 月的论文认为，下一次极端崩盘中 VIX 会冲到前所未见的点位。VIX 是用所有虚值期权买卖报价的中间价计算的，一直算到连续两个行权价没有买价为止；而短期期权交易的增加，加上做市商变得更集中，让它用到的 23–37 天期权流动性变差了。2024 年 8 月 5 日，VIX 在凌晨 3:15 盘前交易开始后 15 秒内从 23.9 跳到 42，8:30 超过 65，而近月期货始终在 35 以下。[SEC 的工作论文](https://sec.gov/files/dera-vix-working-paper-2504.pdf)发现，更低行权价的 put 进入了计算（纳入的最低行权价从约 2,700 降到最低 1,400），但最多只贡献了 6 个点；主要原因是被拉大的买卖价差抬高了中间价：3,500 行权价 put 的买卖价差从约 0.2 美元扩大到 15 美元以上，平值 put 从 1 美元以内扩大到 50 美元以上。[BIS](https://www.bis.org/publ/bisbull95.htm) 的结论是，VIX ETF 和 dispersion 交易都不太可能是主因。公司对 VIX 点位的判断是对的，但没有说期货会怎样，而这对持有 VIX call 的人很关键：这些期权跟着期货定价，所以只出现在指数上的飙升，要撑过开盘才能变成钱。

**0DTE 期权。** Ambrus 2023 年 4 月的论文 [*Dispelling False Narratives About 0DTE Options*](https://static1.squarespace.com/static/5f6299603ceb25330f902e7d/t/644beff4e8d2ee6519d85da2/1682698232481/Ambrus+Capital+-+Dispelling+False+Narratives+About+0DTE+Options.pdf)，是为回应摩根大通关于当天到期期权的“Volmageddon 2.0”警告而写的。它调查了十家做市商，结论是机构（投资顾问的叠加和收入策略、做市商、为特定事件做对冲的投资人，以及波动率基金）主导了交易。按它的说法，正常日子里最终用户是净卖方，这让交易商处于 long gamma，起到稳定市场的作用；例外是最终用户争相买入 put 的恐慌日。论文估计，2022 年 10 月 13 日如果 S&P 500 跌回日内低点，交易商需要卖出超过 100 亿美元的 S&P 500 敞口。它的结论是 0DTE [会让波动来得更快，但不会制造波动](https://issuu.com/gig2022/docs/srpinsights_q3_23_web/s/27053577)，这一点经受住了检验：2024 年 8 月的飙升发生在开盘之前，当天的 0DTE 还没开始交易；[一篇学术研究](https://ssrn.com/abstract=4692190)也发现，0DTE 上的大量 gamma 头寸不会放大已经发生的价格波动。对买波动率的机构来说，这个工具反而很有用：可以只为关键的那一天买保护，而不用付一整个月的钱。到 2026 年 2 月，[0DTE 合约占 SPX 成交量的 63%](https://www.pulse.bot/options-derivatives/news/how-0dte-options-can-explain-market-movement-611d9cb0-daa9-4f85-84d2-f40c9ebb3639)。

经得起检验的是机制：交易商的对冲、源源不断的期权卖盘和 VIX 的计算方法，2024 年 8 月都得到了证实。还没有被证实的是频率判断，四次事件说明不了问题；一个既能解释长期平静、又能解释突然爆发的理论，对时机什么也说不出来。剩下能用于交易的结论有两点：飙升的幅度相对于股市的跌幅会更大，所以持有深度虚值期权和 VIX call；飙升会更短，所以在 VIX 超过 40 时卖出，或者根据 VVIX 的证据，在 VIX 本身波动很大的时候卖出，而不是盯着一个固定的 VIX 水平。

</details>

## 平时不花钱的保护，代价在别处

评价尾部基金，可以用 Sidial 自己提出的方法：把预期的持续成本和崩盘时的预期赔付放在一起比（崩盘要事先定义好），而且按投资人的整体配置来算。用这个方法一比，两家基金的区别很明显：按每一块钱持续成本算，Ambrus 无人能及；按每一块钱投入算，Universa 的崩盘赔付大约是它的五倍。一只能自己覆盖持续成本的基金，要以少拿一部分崩盘赔付为代价。而且既然只有真正发生的大幅波动才带溢价，能在突然崩盘中赔付的保护，总是要花钱的。这笔钱总有人付，问题只是谁来付。

<details class="more" markdown="1">
<summary>完整的比较与未解的问题</summary>

Sidial 自己的框架：用预期的年度持续成本除以预期的崩盘回报；事先定义什么算崩盘（S&P 500 一个月跌 20%，或者 VIX 接近 70）；像评价守门员一样，看扑救而不是进球；一直持有；小仓位；按投资人的整体配置，而不是某一笔交易里的资金，来计算回报。

Universa 作为组合中 3.33% 的配置，2020 年 3 月给整个组合贡献了约 13 个百分点（对冲后 +0.4%，不对冲 −12.4%），持续成本每年约为被保护金额的 0.5%。Ambrus 2025 年 4 月自身赚了 25.21%，持续成本接近零；配置 10% 的投资人拿到约 2.5 个百分点。按每一块钱持续成本，Ambrus 赢；按每一块钱投入，Universa 的崩盘赔付大约是它的五倍，而在 2008 年那种持续好几个月的下跌里，差距只会更大，因为“VIX 超过 40 就卖、只保留最低限度的保护”这条规则限制了赔付，而纯粹的保护会随着下跌加深继续赔付。这是根据公开数字做的粗略计算，不是同口径的回测。不付持续成本换来的，是可以把这个策略当作一项独立的投资来持有，而不是整个组合的一项成本。

这种取舍不是 Ambrus 独有的，而是市场给风险定价的方式。如果只有真正发生的大幅波动才带溢价，那么任何在突然崩盘中由合约保证赔付的头寸，都必须付出代价。所以，一只没有持续成本的买波动率基金，只能用到下面三样中的一样或几样：以 vega 为主的保护（隐含波动率上升时赚钱），它便宜，甚至能赚到溢价，但在突然崩盘中不保证赔付；一份单独的交易利润，用来支付保护的成本；或者同时赚取的另一份溢价，比如限定了风险的卖波动率头寸。应该要求基金把这三项分开给你看。同样的证据也能检验关于短期期权的判断：平均来说，短期的虚值期权是整条曲线上最贵的部分，所以如果短期期权真的带有额外的波动，Ambrus 挑选的合约就必须跑赢这个平均。检验办法是：在计入 bleed mitigation 的利润之前，单独看买入头寸的实际波动率减去隐含波动率。

还有两个问题没有答案。第一是稳健性。bleed mitigation 策略的“不相关”，是在平静市场中测出来的；日内交易的利润能否在连续几天跳空、买卖价差急剧扩大的环境中保住，还没有经过检验，而它一旦失效，基金就会在保护头寸正在赔付的时候，失去对成本的覆盖。如果这部分利润有一部分来自昼夜之间的差别（期权开盘偏便宜、收盘偏贵），那它依靠的是一个有文献记录的定价异常，而不是赌场的 51%，也值得问一句：这个差别能解释多少利润。第二是容量：2024 年估计自己容量为 5 亿美元的公司，2026 年正在逼近 10 亿美元。如果 bleed mitigation 无法随之扩大，要么卖波动率的部分做大，基金逐渐变成一只卖波动率基金；要么不做大，基金回到普通尾部基金那样持续付出成本的状态。检验标准是：在 10 亿美元的规模下，像 2023 年那样的年份还能不能做到 +1.7%。

</details>

一句话总结：波动率基金卖的是一种形状，也就是什么时候赚、什么时候亏、赚亏多少；而每一种形状都有它的价格。

</div>
