---
layout: post
title: "Shape, Not Return: What Volatility Funds Actually Sell"
title_zh: 波动率基金卖的是形状，不是收益
permalink: /blogs/shape-not-return/
description: Volatility funds sell a payoff shape, not a return. How to judge short-vol, relative-value, long-vol and tail funds, with Ambrus Group as a case study.
disclaimer: The views expressed here are my own and do not constitute investment advice.
disclaimer_zh: 本文观点仅代表个人，不构成投资建议。
excerpt_separator: ""
---

<div class="lang-block lang-en" lang="en" markdown="1">

<p class="dedication">This one is for a very good friend at Citadel Securities. He taught me volatility, the ideas and the tricks alike, and the VIX options and futures I learned on were my first serious step into the markets.</p>

<section class="abstract">
<h2 class="abstract-label">Abstract</h2>
<p>A volatility fund does not sell returns; it sells a shape. Judged on returns alone, three of the four CBOE Eurekahedge categories look mediocre and only relative value looks good, but the mediocrity is by design. Short vol is insurance underwriting with a fat left tail. Long vol and tail funds are convexity you pay to carry, so the right measure is how much they bleed per unit of payoff. Relative value sells the rarest thing in a portfolio: low correlation.</p>
<p>The premium itself has a shape, too. It accrues overnight and at the front of the curve, thins out while risk builds, and pays most after the spike. Ambrus Group, a tail fund that says it has stopped bleeding, shows what that buys and what it costs. The price is convexity: each dollar allocated buys less of it.</p>
</section>

## One name, four animals

"Vol fund" is one label stuck on four different animals. The CBOE Eurekahedge indices, reconstructed back to 2005 (2008 for tail risk), sort them into short volatility, relative value, tail risk and long volatility. These are not flavors of one strategy; two of them are close to mirror images.

{% include posts/shape-not-return/table-indices.html %}

{% include posts/shape-not-return/fig-1.html %}

The chart shows what the table hides. Put-writing and short vol take equity-sized drawdowns and earn less for it. Relative value sits alone in the safe corner, and tail risk stands where nothing that wanted to make money would ever stand.

<details class="more" markdown="1">
<summary>What the index hides</summary>

1. **The samples are tiny.** The Short Volatility index [launched in 2015 with 15 constituent funds](https://www.hedgeweek.com/cboe-launches-hedge-fund-benchmarks-eurekahedge/); by early 2022 it had two. Relative Value had nine funds in 2023, Tail Risk seven in 2020. An equal-weighted average of two funds is an anecdote with a ticker.
2. **The dead are not counted.** XIV lost more than 90% in a single day in February 2018 and was terminated; LJM Preservation and Growth lost roughly 80% in two days; Malachite and Parplus were wound down in March 2020; Allianz Structured Alpha lost about $7 billion. The index's −31.75% drawdown is the drawdown of the survivors.
3. **A few months write the history.** The Long Volatility index's annualized return since inception was [4.17% at the end of February 2020](https://hedgefundalpha.com/news/hedge-fund-managers-posted-strongest-monthly-outperformance-over-global-equities-since-2009/) and 5.38% a month later: one month rewrote fifteen years.

</details>

## 2020: one shock, two mirror images

2020 drew both shapes on the same chart. Short vol gave up about 26% in February and March, spent the rest of the year earning it back, and finished close to flat. Tail risk made 37% in March, then lost money in seven of the next eight months. Two rules follow. The short-vol premium is fattest right after a spike, but only survivors get to collect it. And a hedge that is never sold hands its profit back.

{% include posts/shape-not-return/fig-2.html %}

<details class="more" markdown="1">
<summary>The 2020 tape and the timing evidence</summary>

Month by month, short vol lost 12.53% in February and 15.85% in March, then made 9.10% in April, 12.36% in July, 6.84% in August and 5.12% in September, ending the year down 0.80%. The rule hiding in that sequence is that implied volatility falls more slowly than realized after a spike, so the premium is never richer than in the weeks that follow. A fund that survives the spike is repaid within months. Malachite never saw April.

Research puts a clock on that rule. Before a spike, insurance gets cheaper, not dearer. [Cheng (2019)](https://academic.oup.com/rfs/article/32/1/180/5017289) finds that the premium embedded in VIX futures falls or stays flat while risk rises, as hedging demand falls with it, and [VIX futures were cheap on the eve of both the 2008 crisis and the 2011 euro crisis, as buyers cashed out and did not buy again](https://www.tuck.dartmouth.edu/news/articles/the-puzzling-market-for-stock-market-volatility-insurance). During the spike, short vol may not be paid at all. [Johnson (2017)](https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/risk-premia-and-the-vix-term-structure/56572D1F060448571BD8F597C732D9C3) shows that the slope of the VIX term structure, not its level, predicts returns on variance swaps, VIX futures and straddles, and [on the days with the lowest slope, when the curve is inverted, the next-day return on owning variance was positive in 17 of 18 asset–maturity combinations](https://www.cxoadvisory.com/volatility-effects/vix-term-structure-slope-and-variance-asset-future-returns/). Only after the shock does the bill arrive: in equities, [the price of variance risk rises sharply after shocks such as 1987 and 2008](https://www.fmg.ac.uk/sites/default/files/media/Malkhozov_0.pdf). The premium is thin on the way in, unpaid at the peak and fattest on the way out.

Tail risk ran the same tape in reverse: up 37.44% in March, then down in seven of the next eight months, after losing 10.40% in 2019. Long volatility did the same, going from +39.70% in the first quarter to [+27.37% by the end of August](https://www.benzinga.com/general/hedge-funds/20/09/17471050/volatility-hedge-funds-have-been-this-years-big-winners). A hedge that is never monetized is just a round trip. The core skill of a tail fund is knowing when to sell the payoff, not when to buy the insurance.

The Tail Risk index has a negative Sharpe ratio and is still worth owning, because Sharpe was never its job. Its [median rolling 12-month return is −7.41% and its correlation with MSCI World is −0.50](https://www.waystone.com/waystone-explores-negatively-correlated-strategies/), and it has [cost about 2.65% a year since 2008](https://mrzepczynski.blogspot.com/2020/10/cboe-eurekahedge-tail-risk-hedge-fund.html). The buyer pays roughly 3% a year for something that made 37% in the worst month of the decade.

Individual funds range far beyond the index:

- [Universa reported 3,612% for March 2020](https://www.bloomberg.com/news/articles/2020-04-08/taleb-advised-universa-tail-risk-fund-returned-3-600-in-march), and [LongTail Alpha's tail fund rose roughly tenfold, or 157% counting client cash held in reserve](https://www.bnnbloomberg.ca/another-tail-risk-hedge-fund-had-eye-popping-returns-in-march-1.1420209). Those are returns on the hedging sleeve, not on the portfolio. Universa recommends a 3.33% allocation; by its own arithmetic, a portfolio of 96.67% S&P 500 and 3.33% Universa [returned +0.4% in March 2020 against −12.4% for the index, and 11.5% a year since inception against 7.9%](https://files.advisorperspectives.com/articles/2020/07/13/empirical-support-for-tail-risk-strategies).
- Cambria's TAIL ETF, a ladder of out-of-the-money S&P 500 puts on top of Treasuries, has [lost 44% since its 2017 launch](https://www.marketsentiment.co/p/tail-risk-hedging). Same idea, naive execution.
- 2024 was a calm year with one spike, and volatility-trading hedge funds [averaged +4.03%](https://globalmarkets.cib.bnpparibas/app/uploads/sites/4/2025/02/bnpparibas-hf-outlook-2025.pdf). On August 5 the VIX went from [16.36 at the end of July to 65.73 before the open, closed at 38.57 and was back at 14.80 by August 16](https://note.com/kyleberry/n/n69653af81a41). The ten largest short-vol ETFs [lost $4.1 billion](https://www.nasdaq.com/articles/billions-lost-market-volatility-bet-vix-surge-hits-traders), and among the 25 volatility funds PivotalPath tracks, [those positioned short lost about 10% that day while the group as a whole gained 5.5–6.5%](https://hedgeweek.com/news/volatility-short-leaves-traders-nursing-big-losses-after-stock-market-plunge).

</details>

## Three vol points and a free benchmark

Every short-vol strategy feeds on the same thing: implied volatility sits above realized, by about three vol points a year. The cheapest way to harvest it is the Cboe PUT index, which since 1986 has earned close to the S&P 500's return with a third less volatility and a shallower drawdown. That is the bar. A short-vol fund that cannot beat a free index after fees is selling a logo.

{% include posts/shape-not-return/fig-3.html %}

Those three pairs of bars are the entire short-vol pitch: nearly the same return, a third less volatility and a third less drawdown. The price is a fatter left tail, hidden in the months the bars average away.

<details class="more" markdown="1">
<summary>The numbers behind the benchmark</summary>

The gap between the VIX and the volatility realized over the following 30 days has [averaged 3.33 points since 2013](https://www.cboe.com/insights/posts/generating-income-and-managing-risk-cash-secured-put-writing-in-a-low-equity-return-environment). Even in 2025, April included, realized came in [about 3 points below implied, in line with the average since 2000](https://earlyretirementnow.com/2026/01/30/options-trading-series-part-14-year-2025-review). Three points a year is all the raw material there is.

The PUT index sells one-month at-the-money S&P 500 puts, fully collateralized with cash. From July 1986 to August 2023 it [returned 9.40% a year against 9.91% for the S&P 500, with 10.26% volatility against 15.38% and a −32.66% maximum drawdown against −50.96%, and it beat the index 95% of the time when the index's rolling one-year return was negative](https://www.webull.com/learn/courseware/ZwQNcy/Generating-Income-and-Managing-Risk-Cash-Secured-Put-Writing-in-a-Low-Equity-Return-Environment). Systematic vol selling earns an equity-like return along a different path: calmer, more negatively skewed and better in bear markets. These are gross numbers, and options are expensive to trade.

That makes PUT the free benchmark, and allocators use it that way: a short-vol fund earns its fees only if it beats both PUT and the Short Volatility index on a drawdown-adjusted basis. Many do not, which is part of why the category's average looks poor. Three vol points a year leave little room for 2-and-20 and trading costs.

</details>

## Even the premium has a shape

Three vol points is an average, and averages lie about where the money is made. The premium lives in three places:

1. **At night.** Options bleed overnight and, on average, earn a little back during the day.
2. **At the front.** Only realized jumps are priced. Hedging the fear of future volatility has historically cost almost nothing.
3. **In the lottery tickets.** Part of what out-of-the-money options charge is the price of leverage and hope, not insurance.

Two short-vol funds with the same Sharpe can be selling entirely different products.

<details class="more" markdown="1">
<summary>The evidence: night, front, lottery</summary>

1. **Night.** [Muravyev and Ni](https://econpapers.repec.org/RePEc:eee:jfinec:v:136:y:2020:i:1:p:219-238) split the daily return on delta-hedged S&P 500 options into two legs. The average loss of 0.7% a day breaks down into −1% from close to open and +0.3% from open to close, and the pattern holds across maturities, moneyness and single-stock options. That is consistent with option prices ignoring the fact that equity volatility is far higher by day than by night. [In the working-paper version](https://www.cxoadvisory.com/equity-options/intraday-versus-overnight-option-returns/), the two legs are about equally volatile and have similar tails, so risk cannot explain the gap. Options are rich at the close and cheap at the open. Selling them every day earned 0.7% a day gross but lost 80% of capital in the financial crisis; selling only overnight earned 1.0% a day gross and was positive in every three-month window, the crisis included. The crisis loss happened in daylight. Weekends repeat the error: [option returns are significantly lower over non-trading periods, mostly weekends, because of mispricing rather than risk](https://econpapers.repec.org/RePEc:bla:jfinan:v:73:y:2018:i:2:p:861-900), although [an earlier version found little of the effect in S&P 500 index options](https://www.cxoadvisory.com/?p=5800). All of these figures are gross, at mid prices and mostly from before SPX options traded overnight, and the effect may have faded since publication. The cost of trading twice a day would eat it.
2. **Front.** [Dew-Becker, Giglio, Le and Rodriguez](https://www.nber.org/papers/w21182.pdf) use variance swaps of different maturities to separate realized variance from news about future variance. From 1996 to 2014, hedging news about variance at horizons from one quarter to 14 years cost nothing on average; only unexpected, transitory realized variance was priced. Their example is the 2011 debt-ceiling fight. The one-month variance swap rose from 16.26 at the end of June to 25.96 at the end of July while realized volatility stayed near 15, and then August realized 47.18. Across [19 option markets](https://www.nber.org/system/files/working_papers/w26323/w26323.pdf), the premium on gamma is negative and the premium on vega positive, and both grow more extreme further out of the money. The market pays to avoid the punch, not the fear of one.
3. **Lottery.** Options embed leverage that constrained investors cannot get elsewhere, and [the more leverage an option embeds, the lower its risk-adjusted return: a portfolio long low-leverage and short high-leverage index options earns abnormal returns with a t-statistic of 6.3](https://nber.org/system/files/working_papers/w18558/w18558.pdf). Prediction markets run the control experiment with no macro risk at all. On Kalshi, [across more than 300,000 contracts, a 10-cent contract wins less than 10% of the time, takers lose almost 32% on average and makers about 10%, and the bias holds in politics, entertainment and economic-data contracts alike](https://cepr.org/voxeu/columns/economics-kalshi-prediction-market). 0DTE is the same game played with options: [about 75% of retail S&P 500 option trades are 0DTE, and since daily expiries began, retail has lost about $358,000 a day, roughly 60% of it to transaction costs](https://ssrn.com/abstract=4404704).

So a short-vol book sells two different things. Insurance, meaning near-the-money index puts like the ones in the PUT index, is paid for carrying jump risk. Leverage and lottery tickets, meaning deep out-of-the-money and short-dated contracts, earn a premium that needs no crash to justify it, as Kalshi's entertainment contracts show. And the maker–taker gap says that execution is part of the premium, not a cost line beneath it.

</details>

## Reinsurers of the options market

Each category does a job no other asset does. Short vol earns an underwriting profit that is not equity beta. Relative value earns a return that does not move with anything else. Long vol and tail are the only exposures that pay out by contract when equities gap down. And for the market as a whole, volatility funds are the reinsurers: option demand is one-sided, dealers can no longer warehouse the risk it creates, and somebody has to hold that risk for a price.

<details class="more" markdown="1">
<summary>The case for each, and the evidence</summary>

For the investor:

1. **Short vol** is a risk premium other than equity beta: the underwriting profit on insurance, which a 60/40 portfolio cannot collect.
2. **Relative value** is genuinely low-correlation return. A Sharpe ratio of 1.18 at 3.9% volatility with a 6.5% drawdown is rare among hedge fund strategies, and Dominicé found that [adding the Long Volatility and Relative Value Volatility indices to the S&P 500 gave about 7% a year at more than double the index's Sharpe](https://www.dominice.com/news-performance-analysis-of-long-volatility-and-relative-value-volatility-strategies-2/). That low correlation cannot come from skew. [Kozhan, Neuberger and Schneider](https://openaccess.city.ac.uk/id/eprint/15209/) find that almost half of one-month S&P 500 skew is a risk premium, but skew risk and variance risk are nearly the same risk: capture one while hedging out the other, and the premium all but vanishes. A relative-value book that is net short skew is short variance in disguise, so the decorrelation has to come from dispersion, term structure or cross-asset trades.
3. **Long vol and tail** are the only exposures that pay out by contract, and at once, when equities gap down. Bonds failed at that job in 2022, and [stocks and bonds have become more correlated](https://www.goldmansachs.com/insights/articles/hedge-funds-have-momentum-after-posting-double-digit-returns-last-year). The mathematics is the volatility tax: compounded growth is roughly the arithmetic mean minus half the variance, so deep drawdowns do non-linear damage (a 50% loss needs a 100% gain to recover). A hedge that costs around [$5 million a year per $1 billion protected](https://www.financial-planning.com/articles/calpers-missed-a-1-billion-payday-by-scrapping-market-hedge-ahead-of-the-coronavirus-outbreak) raises long-run CAGR if it turns a −34% drawdown into −6%. An independent backtest of a Universa-style strategy on Cboe data from 2006 to 2020 [produced 11.0% a year, close to Universa's claimed 11.5% against 7.9% for the S&P 500](https://api.advisorperspectives.com/articles/2020/07/13/empirical-support-for-tail-risk-strategies). The hedge also frees up risk budget, letting an investor hold 100% in risk assets instead of 60/40, and it pays out exactly when assets are cheapest. CalPERS is the cautionary tale: it [hired Universa and LongTail Alpha in 2017, then redeemed, and the Universa position it gave up returned about 3,600% in March 2020](https://www.bloombergquint.com/markets/calpers-forfeited-a-1-billion-payday-by-scrapping-market-hedge), a payday of more than $1 billion it could have spent buying the lows.

For the market, the reason is structural. Option demand is one-sided: institutions systematically buy index puts and sell calls, and structured products hand long-dated vega and correlation risk to dealers. Since 2008, dealer balance sheets have not been able to warehouse that risk, so somebody else has to hold it, for a price. Short-vol funds lower the price of insurance for everyone. Long-vol funds become liquidity providers in a crash, selling puts and VIX calls as they monetize. Relative-value funds keep the volatility surface consistent across skew, tenor, asset class and dispersion. Even the VIX ETP complex, whose mechanical roll bleeds in contango, needs somebody on the other side.

The reinsurer story is more than a metaphor. [Chen, Joslin and Ni](https://www.nber.org/papers/w25573) read dealer constraints off trading in deep out-of-the-money index puts. When puts get dearer while the public buys fewer of them, it is the supply side that has tightened, and such periods bring more expensive options, higher risk premia across assets, worse funding liquidity and broker-dealer deleveraging. [Barras and Malkhozov](https://www.bis.org/publ/work521.pdf) find that the variance risk premium measured in options and the one measured in equities move together but are not the same; the gap tracks the financial health of intermediaries and [at times exceeds 3% a year, twice the average premium itself](https://www.fmg.ac.uk/sites/default/files/media/Malkhozov_0.pdf). [Muravyev](https://doi.org/10.1111/jofi.12380) shows that market makers' inventory risk moves option prices more than informed trading does. Part of what a short-vol fund harvests, then, is rent on scarce balance sheet, and rent behaves like rent. It is highest when dealers are constrained, which shows up as dearer puts with fewer public buyers, and it should fall as income funds, QIS and short-vol capital crowd in. That is a capacity limit on the whole category, not just on any one fund.

Whether to use a fund or do it yourself is an operations question: margin, Greeks, execution in thin deep out-of-the-money options, and the discipline to monetize. The gap between implementations of the same idea is the entire business. TAIL's −44% and Ambrus's +51.48% since 2022 both go by the name "buying tail protection." And demand is rising: HFR counted [562 hedge fund launches in 2025, a four-year high, as investors added strategies positioned for higher volatility](https://www.hedgeweek.com/hedge-fund-launches-hit-four-year-high-as-investors-brace-for-volatility/), and Aberdeen's outlook for the second half of 2025 [turned positive on both relative-value and directional volatility strategies](https://www.aberdeeninvestments.com/en-us/institutional/insights-and-research/h2-2025-hedge-fund-outlook).

</details>

## The case against: AQR's tortoise and hare

The case against tail funds is older than the case for them. In AQR's version, insurance costs more over time than it pays out, and trend following defends better in slow bear markets. The record splits by the speed of the crash: options won the fast one in 2020, and trend won the slow one in 2022. Whether you need a tail fund depends on which crash you fear, and on the price you pay.

<details class="more" markdown="1">
<summary>AQR’s argument and the evidence</summary>

AQR's 2011 paper ["Chasing Your Own Tail (Risk)"](https://caia.org/media/4891/download) argued that tail insurance costs more than it pays out and offered five alternatives: diversify by risk rather than by asset, manage volatility actively, add uncorrelated alternatives, use low-beta equities, and write a crisis plan in advance. [Ilmanen, Thapar, Tummala and Villalon (2021)](https://www.Aqr.Com/-/media/AQR/Documents/Journal-Articles/Journal-of-Systematic-Investing-Vol-1-Issue-1--Tail-Risk-Hedging-AQR.pdf?sc_lang=en) compared out-of-the-money index puts with multi-asset trend following and found a generally stronger case for trend, except for investors who mainly fear fast drawdowns.

AQR's [2022 follow-up](https://www.wealthmanagement.com/equities/hedging-tail-risks-tortoise-versus-hare) showed the pattern. In the short February–March 2020 drawdown, tail-hedging funds and put buying did best; in the long drawdown that began in January 2022, trend following did best, and options-based strategies paid for their crash protection with negative long-run average returns. Harvey, Hoyle, Rattray, Sargaison, Taylor and Van Hemert (2019) found that continuously holding short-dated S&P 500 puts was the most reliable defense and also the most expensive, returning −7.4% over all periods. FactorResearch compared tail-risk funds with cash-like assets from 2007 to 2020 and found [similar risk-adjusted returns and drawdowns, with tail funds most in demand when least attractive](https://www.advisorperspectives.com/articles/2020/05/06/an-aqr-warning-and-a-3-612-return-fire-up-the-black-swan-debate).

Dean Curnutt of Macro Risk Advisors put it in one line: tail hedging works, but the price matters a great deal.

</details>

## Ambrus, or the art of not bleeding

Ambrus Group runs a carry-neutral tail fund: a long-volatility book whose rent is paid by short-term, mostly intraday options trading. By its own numbers, it has been roughly flat in normal months and sharply up in tail events, and three event months produced almost all of its trailing 24-month return.

{% include posts/shape-not-return/table-ambrus.html %}

{% include posts/shape-not-return/fig-4.html %}

Read it from left to right: twenty-four months, three steps. The flat bar for the other 21 months is the entire carry-neutral claim, computed, like every Ambrus number here, from self-reported figures.

The number to watch is size. Assets went from about $50 million in 2024 to nearly $1 billion in 2026, against a capacity the firm itself once put at $500 million.

{% include posts/shape-not-return/fig-5.html %}

The dashed line is the firm's own number. Every dollar above it is money the bleed-mitigation engine was not originally sized to carry.

<details class="more" markdown="1">
<summary>How the machine works</summary>

Ambrus describes itself as a Chicago-style proprietary trading firm fused with a tail strategy. The flagship Ambrus Volatility Fund [launched in May 2022; the firm was incorporated in September 2020 and traded separately managed accounts from January 2021](https://www.open-funds.ch/sites/default/files/2025-05/202504%20NEW%20REVS.pdf). Co-CIOs [Kris Sidial](https://londonstrategicedge.com/directory/fintech-founders/kris-sidial/) (Xanthus Capital, Chimera Securities, nearly four years on BMO's exotic derivatives desk) and William Wise run the book, and Sal Abbasi (Citadel, 2006–2012) runs quantitative risk. The fund uses no leverage and holds a large cash balance, and Sidial keeps [60% of his liquid net worth in the funds](https://www.opalesque.com/709388/tail_risk_strategy_profits_from_monetization_during938.html).

The shape matches what Sidial [told Forbes in 2022](https://www.forbes.com/sites/jacobwolinsky/2022/10/07/this-fund-manager-says-tail-risk-events-like-the-pandemic-are-only-going-to-increase/) the fund would do: flat to slightly down in normal markets, sharply up in tail events. Split the trailing 24 months, and the three event months compound to roughly +47% while the other 21 months add about +4% in total. In the data, the bleed really is zero.

[The Hedge Fund Journal's 2024 profile](https://thehedgefundjournal.com/ambrus-groups-carry-neutral-tail-risk-hedge-fund/) sums up the mandate in three lines: minimize the cost of holding protection; take profits during volatility spikes, generally above a VIX of 40; and always keep enough tail protection to pay off if volatility keeps rising. The book runs on two engines. Loss mitigation buys protection across the VIX complex (VIX options, index derivatives and ETPs), optimizing tenor and strike and watching flows. It is built to pay 100–200 times at the peak, which is what a VIX call bought with the VIX in the mid-teens pays if the index reaches 50–70. Bleed mitigation is a set of mostly intraday, risk-capped strategies in plain-vanilla options. They trade hedging behavior, term structure, intraday volume and single-name overreactions, with hit rates and win/loss ratios only modestly better than a coin flip; the firm compares its edge to a casino's 51%. Most of that profit is recycled into protection. A floor of protection stays on even when trading loses, and more can be bought when a spike looks close.

The long gamma sits in [two-week to two-month listed options](https://podscripts.co/podcasts/the-derivative/the-kid-who-kaptures-kurtosis-with-kris-sidial-of-ambrus-group), on the thesis that the front of the curve carries excess variance from dealer hedging and that large moves since 2017 have played out within six weeks. The fund buys cheap skew and wings on both sides, prefers single names and sectors with positioning imbalances to plain SPX puts, and accepts being wrong 70–80% of the time. In April 2025 its best trades were one-to-two-month out-of-the-money S&P 500 contracts and one-to-three-month out-of-the-money VIX contracts. Short vega is always capped with spreads; long gamma never is. The risk the firm fears most is the belly: volatility rises, the wings fail to follow, and both sides lose. Monetization is discretionary, weighing hedge fund and dealer positioning, vol of vol and the fundamental backdrop, but it follows one rule: sell enough to make the trade free, then sell in tiers. Giving back profit is allowed; losing money on the trade is not.

Scale is the variable to watch. In September 2024 the firm had raised about $50 million without a seed investor and put its capacity near $500 million. By spring 2025 firm assets were about $115 million, and its [Form ADV reports $485 million as of March 1, 2026](https://radientanalytics.com/firm/adv/the-ambrus-group-llc-316761), with the [master fund at $439.5 million from 157 investors at a $250,000 minimum](https://aum13f.com/firm/the-ambrus-group-llc). The April 2026 investor letter said assets were approaching $1 billion, that the fund would soft-close from July 1, and that large multi-strategy hedge funds were among its backers. Wise has said that the bleed-mitigation alpha scales far less well than the loss-mitigation side.

</details>

## The plumbing thesis

Behind the book sits one belief: since about 2017, US equity volatility has been manufactured more by the plumbing of the derivatives market (dealer gamma, structural volatility supply, the way the VIX is computed) than by fundamentals. August 2024 confirmed the plumbing, but four events cannot confirm the prophecy that crashes will now come twice as often. What survives is a trade that fits in two sentences. Spikes will be bigger relative to the equity move, so own far wings and VIX calls. They will also be shorter, so sell into them.

{% include posts/shape-not-return/fig-6.html %}

The gap between the 65.7 print and the futures line is the thesis made visible. The index can overshoot any price anyone will actually trade at, and a VIX-call book is paid off the futures, not the print.

<details class="more" markdown="1">
<summary>The mechanisms and testable claims</summary>

The firm's May 2022 paper, *Volatility and the Changing Market Structure Driving US Equities*, lays out four reflexive loops. First, dealers who are net short gamma must buy as prices rise and sell as they fall, amplifying moves, while dealers who are long gamma, a position created by overwriting and income funds in the belly of the distribution, dampen them. The two coexist, so markets stay calm until price leaves the belly for the wings, where dealers flip from stabilizer to accelerant; gaps cannot be hedged at all. Second, structured products leave banks with path-dependent exposure that supplies volatility in calm markets and demands it near barriers. Third, passive, cap-weighted flows are momentum flows concentrated in a handful of names. Fourth, post-2008 regulation removed the shock absorbers: dealers cannot warehouse risk, liquidity comes from algorithms whose depth is procyclical, and options notional now exceeds cash equity volume. The conclusion is not a crash call but a frequency call: [events that used to arrive once a cycle will arrive about twice as often](https://www.forbes.com/sites/jacobwolinsky/2022/10/07/this-fund-manager-says-tail-risk-events-like-the-pandemic-are-only-going-to-increase/).

Three other claims are easier to test.

**Structural volatility supply.** Ambrus estimates that [short-vega notional has doubled since 2018 and assets in derivative-income funds have grown tenfold](https://thehedgefundjournal.com/ambrus-groups-carry-neutral-tail-risk-hedge-fund/), with multi-strategy pods and QIS dispersion trades adding to the pressure. Flows like these move prices: [an earlier version of Muravyev's paper](https://lfe.hse.ru/news/44287880.html) found that rolling positions at expiration creates enough selling pressure to push the prices of non-expiring options down 5.7%. Suppressed implied volatility makes convexity cheap in calm periods. When the sellers are forced to cut, the result is a short-covering spike (even hedged short-vol funds buy some exposure back), and then the same sellers return and press volatility down again. That is why spikes are V-shaped, and why the firm sells into them. "Cheap" needs a footnote, though. [Park](https://www.federalreserve.gov/pubs/feds/2013/201354/201354pap.pdf) finds that a rise in VVIX makes out-of-the-money S&P 500 puts and VIX calls dearer and lowers their returns over the next three to four weeks (a one-standard-deviation rise predicts next-day returns 1.32–2.19 percentage points lower on the puts and 0.68–1.01 lower on the calls), so the wings are cheap when VVIX is low. But a steep term structure, the normal state of a calm market, [predicts low returns on variance swaps, VIX futures and straddles](https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/risk-premia-and-the-vix-term-structure/56572D1F060448571BD8F597C732D9C3). Calm can make the wings cheap; it does not make the belly cheap.

**A more leptokurtic VIX.** The firm's December 2022 paper argued that the next extreme crash would print VIX levels never seen before. The index is computed from quote midpoints across all out-of-the-money strikes until two consecutive zero bids, and short-dated trading plus market-maker concentration had thinned out the 23-to-37-day options it uses. On August 5, 2024 the VIX jumped from 23.9 to 42 within 15 seconds of the 3:15 a.m. pre-market open and passed 65 by 8:30, while front-month futures stayed below 35. An [SEC working paper](https://sec.gov/files/dera-vix-working-paper-2504.pdf) found that deeper puts entered the calculation (the lowest included strike fell from about 2,700 to as low as 1,400) but added at most 6 points. The real driver was inflated midpoints: the bid-ask spread on the 3,500-strike put widened from about $0.20 to more than $15, and on at-the-money puts from under $1 to $50 or more. The [BIS](https://www.bis.org/publ/bisbull95.htm) concluded that VIX ETFs and dispersion trades were unlikely to be the main cause. The thesis was right about the print and silent about the futures, and that is the catch for any VIX-call book: options mark to the futures, so a spike that lives only in the spot index pays only if it survives the open.

**0DTE options.** Ambrus's April 2023 paper, [*Dispelling False Narratives About 0DTE Options*](https://static1.squarespace.com/static/5f6299603ceb25330f902e7d/t/644beff4e8d2ee6519d85da2/1682698232481/Ambrus+Capital+-+Dispelling+False+Narratives+About+0DTE+Options.pdf), was written as a rebuttal to JPMorgan's "Volmageddon 2.0" warning. It surveyed ten market makers and concluded that institutions (RIA overlay and yield programs, market makers, event hedgers and volatility funds) dominate the flow. By its account, end users are net sellers on normal days, which leaves dealers long gamma and stabilizing; the exception is a panic in which end users net-buy puts. The paper estimated that on October 13, 2022, dealers would have had to sell more than $10 billion of delta had the S&P 500 revisited its intraday low. Its verdict, that 0DTE is [an accelerator of volatility rather than its creator](https://issuu.com/gig2022/docs/srpinsights_q3_23_web/s/27053577), has held up. August 2024's spike happened pre-market, before that day's 0DTE options had traded, and [an academic study](https://ssrn.com/abstract=4692190) finds that high open-interest gamma in 0DTE options does not propagate past volatility. For a long-volatility shop the same tool is a weapon: it can rent gamma and event risk for the day that matters instead of carrying them for a month. By February 2026, [0DTE contracts were 63% of SPX volume](https://www.pulse.bot/options-derivatives/news/how-0dte-options-can-explain-market-movement-611d9cb0-daa9-4f85-84d2-f40c9ebb3639).

What survives scrutiny is the mechanism: dealer gamma, structural supply and VIX methodology, all confirmed in August 2024. What does not is the frequency call, which four events cannot settle; a theory that explains both long calm and sudden bursts says nothing about timing. The tradable residue fits in two sentences. Spikes will be larger relative to the equity move, so own far wings and VIX calls. They will also be shorter, so sell above 40, or, on the VVIX evidence, sell when vol of vol is high rather than at a fixed VIX level.

</details>

## Zero bleed is not free

Score a tail fund the way Sidial himself suggests: weigh expected bleed against the expected payoff in a crash defined in advance, and measure both on the investor's whole allocation. On that scale the two products split cleanly. Per unit of bleed, Ambrus is unbeatable; per dollar allocated, Universa's crash payout was roughly five times larger. Carry neutrality is paid for in convexity, and since only realized jumps carry a premium, protection that pays in a gap always costs something. Somebody pays the rent. The only question is who.

<details class="more" markdown="1">
<summary>The full comparison and open questions</summary>

Sidial's own framework: divide expected annual bleed by expected return in a crash; define the crash in advance (a 20% monthly fall in the S&P 500, or a VIX near 70); judge the fund like a goalkeeper, on saves rather than goals; hold it continuously; size it small; and measure returns on the investor's total allocation, not on the capital inside one trade.

Universa, sized at 3.33% of a portfolio, added roughly 13 points in March 2020 (+0.4% for the hedged portfolio against −12.4% unhedged), at a running cost on the order of 0.5% a year of protected notional. Ambrus made 25.21% on its own capital in April 2025 at a running cost near zero, so an allocator holding it at 10% received about 2.5 points. Per unit of bleed, Ambrus wins. Per unit of allocation, Universa's crash payout is roughly five times larger, and the gap would widen in a 2008-style decline that lasts for months, because "sell above 40 and keep a floor" caps the payoff that pure convexity leaves uncapped. These are rough sums on reported figures, not a like-for-like backtest. What carry neutrality buys is the ability to hold the strategy as a standalone position rather than as a cost center.

The trade-off is not peculiar to Ambrus; it is how the market prices risk. If only realized jumps carry a premium, any position that pays out by contract in a gap has to cost something. A long-volatility fund with zero bleed is therefore a recipe with three possible ingredients: protection that is mostly vega, which is cheap or even earns a premium but does not pay out by contract in a gap; a separate alpha that subsidizes the protection; or a second premium sold alongside, such as capped short vega. Ask to see the three separately. The same evidence tests the front-end thesis. On average, short-dated out-of-the-money gamma is the most expensive point on the curve, so if the front really carries excess variance, the contracts Ambrus picks have to beat that average. The way to check is to look at the long book's realized-minus-implied on its own, before bleed mitigation.

Two questions remain open. The first is robustness. The bleed-mitigation strategies have been measured as uncorrelated in calm markets, but whether intraday alpha survives a multi-day gap regime with blown-out spreads is untested, and its failure would suspend carry neutrality exactly when the long book is paying. If part of that alpha comes from the day–night asymmetry (options cheap at the open, rich at the close), it rests on a documented anomaly rather than a casino's 51%, and it is fair to ask how much of the P&L the asymmetry explains. The second is capacity: a firm that estimated its capacity at $500 million in 2024 is approaching $1 billion in 2026. If bleed mitigation cannot scale, either the short book grows and the fund drifts toward short vol, or it does not and the fund drifts back to an ordinary tail fund's bleed. The test is whether the next 2023 still comes in at +1.7% with $1 billion under management.

</details>

The whole essay in one line: a volatility fund sells a shape, and every shape has a price.

</div>

<div class="lang-block lang-zh" lang="zh-CN" markdown="1">

<p class="dedication">这篇文章献给我在 Citadel Securities 的一位非常好的朋友。Volatility 的各种概念和技巧，我都是从他那里学来的；VIX 期权和期货，也是我第一次认真接触的二级市场品种。</p>

<section class="abstract">
<h2 class="abstract-label">摘要</h2>
<p>波动率基金卖的不是收益，是形状。只看收益，CBOE Eurekahedge 的四类指数里三类都平庸，只有 relative value 好看——但这种平庸是设计出来的。Short vol 是带着肥左尾的承保生意；long vol 和 tail 是要付持有成本的凸性，该看的是每一单位赔付要 bleed 掉多少；relative value 卖的是组合里最稀缺的东西：低相关。</p>
<p>溢价本身也有形状：它在夜里、在期限结构的最前端累积，风险酝酿时变薄，spike 过后才最肥。Ambrus Group 这只自称不再 bleed 的 tail 基金，展示了不 bleed 能换来什么，又要付出什么：每一块钱配置能买到的凸性变少了。</p>
</section>

## 一个名字，四种动物

“vol fund”是贴在四种动物身上的同一个标签。CBOE Eurekahedge 的指数把它们分成 short volatility、relative value、tail risk 和 long volatility 四类，数据回溯到 2005 年（tail risk 从 2008 年起）。它们不是同一个策略的不同口味，其中两类几乎互为镜像。

{% include posts/shape-not-return/table-indices-zh.html %}

{% include posts/shape-not-return/fig-1-zh.html %}

这张图说出了表格藏住的东西：put-writing 和 short vol 承受着和股票同一量级的回撤，收益却更低；relative value 独自待在安全的角落；tail risk 站在任何想赚钱的东西都不会站的位置。

<details class="more" markdown="1">
<summary>指数藏着的东西</summary>

1. **样本小得可怜。** Short Volatility 指数[2015 年发布时有 15 只成分基金](https://www.hedgeweek.com/cboe-launches-hedge-fund-benchmarks-eurekahedge/)，到 2022 年初只剩 2 只；Relative Value 2023 年 9 只，Tail Risk 2020 年 7 只。两只基金的等权平均，不过是挂着 ticker 的个案。
2. **死掉的不算数。** 2018 年 2 月 XIV 一天跌逾 90% 后清盘；LJM Preservation and Growth 两天亏掉约八成；2020 年 3 月 Malachite 和 Parplus 清盘，Allianz Structured Alpha 亏约 70 亿美元。指数的 −31.75%，是幸存者的回撤。
3. **几个月写成的历史。** Long Volatility 指数的“成立以来年化”[在 2020 年 2 月底是 4.17%](https://hedgefundalpha.com/news/hedge-fund-managers-posted-strongest-monthly-outperformance-over-global-equities-since-2009/)，一个月后变成 5.38%。一个月，改写了十五年。

</details>

## 2020：一次冲击，两面镜像

2020 年把两种形状画在了同一张图上。Short vol 在 2 月和 3 月吐出约 26%，然后用剩下的大半年慢慢赚回来，全年收在接近持平；tail risk 3 月赚了 37%，之后八个月里七个月亏钱。由此得出两条定律：short vol 的溢价在 spike 之后最肥，但只有活下来的人收得到；不卖掉的 hedge，会把利润原样还回去。

{% include posts/shape-not-return/fig-2-zh.html %}

<details class="more" markdown="1">
<summary>2020 年的细节与时机</summary>

Short vol：2 月 −12.53%，3 月 −15.85%，然后 4 月 +9.10%、7 月 +12.36%、8 月 +6.84%、9 月 +5.12%，全年 −0.80%。这串数字里藏着一条定律：spike 之后，隐含波动率掉得比已实现波动率慢，所以溢价最肥的时候，就是 spike 之后的那几周。活过 spike 的基金几个月就能回本；Malachite 没能看到 4 月。

研究把这条定律的时间轴也补上了。spike 之前，保险反而变便宜：[Cheng（2019）](https://academic.oup.com/rfs/article/32/1/180/5017289) 发现，风险上升时，VIX 期货里嵌入的溢价下降或持平，同时对冲需求也在下降；[2008 年危机和 2011 年欧债危机前夜，VIX 期货是便宜的，买保险的人兑现之后就没再续买](https://www.tuck.dartmouth.edu/news/articles/the-puzzling-market-for-stock-market-volatility-insurance)。spike 当中，做空 vol 可能根本拿不到补偿：[Johnson（2017）](https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/risk-premia-and-the-vix-term-structure/56572D1F060448571BD8F597C732D9C3) 发现，能预测方差互换、VIX 期货和跨式收益的，是 VIX 期限结构的斜率，而不是 VIX 的高低；[在斜率最低、曲线倒挂的那些日子里，18 个资产/期限组合中有 17 个做多方差的次日收益为正](https://www.cxoadvisory.com/volatility-effects/vix-term-structure-slope-and-variance-asset-future-returns/)。冲击过后，账单才寄到：在股票市场，[方差风险的价格在 1987 年、2008 年这类冲击之后急剧上升](https://www.fmg.ac.uk/sites/default/files/media/Malkhozov_0.pdf)。涨潮时薄，浪尖上可能一分钱都拿不到，退潮时最肥。

Tail risk 正好反过来：3 月 +37.44%，之后八个月里七个月为负；再往前，2019 年全年是 −10.40%。Long volatility 也一样：一季度 +39.70%，[到 8 月底只剩 +27.37%](https://www.benzinga.com/general/hedge-funds/20/09/17471050/volatility-hedge-funds-have-been-this-years-big-winners)。不变现的 hedge，只是坐了一趟过山车。tail 基金的核心技能，是知道什么时候把赔付变现，而不是什么时候买保险。

Tail Risk 指数的 Sharpe 是负的，但依然值得持有，因为它的任务从来不是 Sharpe。它的[滚动 12 个月收益中位数是 −7.41%，与 MSCI World 的相关性为 −0.50](https://www.waystone.com/waystone-explores-negatively-correlated-strategies/)；[2008 年以来每年大约拖累 2.65%](https://mrzepczynski.blogspot.com/2020/10/cboe-eurekahedge-tail-risk-hedge-fund.html)。买家每年付大约 3%，换来一样东西：十年里最坏的那个月，它赚了 37%。

单只基金比指数极端得多：

- [Universa 2020 年 3 月回报 3,612%](https://www.bloomberg.com/news/articles/2020-04-08/taleb-advised-universa-tail-risk-fund-returned-3-600-in-march)；[LongTail Alpha 的 tail 基金涨了约 10 倍，算上客户留存现金是 157%](https://www.bnnbloomberg.ca/another-tail-risk-hedge-fund-had-eye-popping-returns-in-march-1.1420209)。这是保护仓位本身的回报，不是整个组合的。Universa 建议只配 3.33%；按它自己的测算，96.67% SPX 加 3.33% Universa 的组合[2020 年 3 月 +0.4%（同月 SPX −12.4%），成立以来年化 11.5%，SPX 为 7.9%](https://files.advisorperspectives.com/articles/2020/07/13/empirical-support-for-tail-risk-strategies)。
- Cambria 的 TAIL ETF（国债上叠一层 OTM S&P 500 put ladder）[自 2017 年成立以来累计 −44%](https://www.marketsentiment.co/p/tail-risk-hedging)。同一个想法，粗糙的实现。
- 2024 年平静，只有一次 spike，波动率交易对冲基金[平均 +4.03%](https://globalmarkets.cib.bnpparibas/app/uploads/sites/4/2025/02/bnpparibas-hf-outlook-2025.pdf)。8 月 5 日，VIX [从 7 月 31 日的 16.36 冲到盘前 65.73，当天收 38.57，8 月 16 日回到 14.80](https://note.com/kyleberry/n/n69653af81a41)；前十大 short-vol ETF [蒸发 41 亿美元](https://www.nasdaq.com/articles/billions-lost-market-volatility-bet-vix-surge-hits-traders)；PivotalPath 跟踪的 25 只 vol 基金里，[做空的那些当天亏约 10%，整组却赚 5.5% 到 6.5%](https://hedgeweek.com/news/volatility-short-leaves-traders-nursing-big-losses-after-stock-market-plunge)。

</details>

## 三个 vol 点，一个免费 benchmark

所有 short vol 策略吃的是同一样东西：隐含波动率比已实现波动率高，每年大约高 3 个 vol 点。最便宜的吃法是 Cboe PUT 指数：1986 年以来，它拿到了接近 S&P 500 的收益，波动少三分之一，回撤也更浅。这就是门槛。扣完费用打不过一个免费指数的 short-vol 基金，卖的只是一个 logo。

{% include posts/shape-not-return/fig-3-zh.html %}

三组柱子就是 short vol 的全部卖点：几乎一样的收益、少三分之一的波动、浅三分之一的回撤——代价是一条更肥的左尾，藏在被这些柱子平均掉的月份里。

<details class="more" markdown="1">
<summary>benchmark 背后的数字</summary>

VIX 与随后 30 天已实现波动率的差，[2013 年以来平均 3.33 个点](https://www.cboe.com/insights/posts/generating-income-and-managing-risk-cash-secured-put-writing-in-a-low-equity-return-environment)；2025 年即便算上 4 月，已实现波动率仍然[比隐含低约 3 个点，与 2000 年以来的平均差距一致](https://earlyretirementnow.com/2026/01/30/options-trading-series-part-14-year-2025-review)。每年 3 个点，就是全部的原材料。

PUT 指数的做法是：以现金作抵押，每月卖出一个月期的 ATM S&P 500 put。1986 年 7 月到 2023 年 8 月，它[年化 9.40%，S&P 500 为 9.91%；标准差 10.26% vs 15.38%；最大回撤 −32.66% vs −50.96%；在 S&P 滚动一年收益为负时，95% 的时间跑赢指数](https://www.webull.com/learn/courseware/ZwQNcy/Generating-Income-and-Managing-Risk-Cash-Secured-Put-Writing-in-a-Low-Equity-Return-Environment)。系统性卖 vol 赚的是一份接近股票的回报，只是走了另一条路：更平稳、偏度更负、熊市里相对更好。这些是毛收益，而期权的交易成本不低。

所以 PUT 是免费的 benchmark，allocator 也确实这么用：一只 short-vol 基金只有在回撤调整后打败 PUT 和 Short Volatility 指数，才配得上它的费用。很多基金做不到，这是这个类别平均数难看的原因之一：每年 3 个 vol 点，装不下 2/20 和交易成本。

</details>

## 连溢价都有形状

3 个 vol 点是一个平均数，而平均数会在“钱从哪里来”这件事上撒谎。溢价住在三个地方：

1. **夜里。** 期权在隔夜 bleed，白天平均还能赚回一点。
2. **最前端。** 只有真正发生的跳跃才被定价；对未来波动的担心，历史上几乎不用花钱就能对冲。
3. **彩票型合约。** 虚值期权收的钱里，有一部分是杠杆和希望的价格，而不是保险费。

Sharpe 相同的两只 short-vol 基金，可能卖的是完全不同的产品。

<details class="more" markdown="1">
<summary>证据：夜里、前端、彩票</summary>

1. **夜里。** [Muravyev 和 Ni](https://econpapers.repec.org/RePEc:eee:jfinec:v:136:y:2020:i:1:p:219-238) 把 S&P 500 期权做 delta 对冲后的日收益拆成两段：每天平均 −0.7%，其中收盘到开盘 −1%，开盘到收盘 +0.3%；各期限、各 moneyness 和个股期权都是这样。这符合一种解释：期权定价忽略了股票白天的波动远高于夜间。[在工作论文版本里](https://www.cxoadvisory.com/equity-options/intraday-versus-overnight-option-returns/)，两段的波动率差不多、尾部也相似，所以风险解释不了这个差距；期权在收盘时偏贵、开盘时偏便宜。天天卖期权，平均每天毛赚 0.7%，却在金融危机里亏掉 80% 的本金；只在隔夜卖，平均每天毛赚 1.0%，而且任何一个 3 个月窗口（包括危机期间）都是正的。危机的亏损发生在白天。周末犯的是同一个错：[期权在非交易时段（主要是周末）的收益显著更低，原因是定价错误而不是风险](https://econpapers.repec.org/RePEc:bla:jfinan:v:73:y:2018:i:2:p:861-900)，不过[早期版本发现这个效应在 S&P 500 指数期权上很弱](https://www.cxoadvisory.com/?p=5800)。以上都是按中间价计算的毛收益，样本大多在 SPX 期权开放夜盘之前，论文发表后效应也可能已经减弱；一天交易两次的成本就足以把它吃光。
2. **前端。** [Dew-Becker、Giglio、Le 和 Rodriguez](https://www.nber.org/papers/w21182.pdf) 用不同期限的方差互换，把已实现方差和“关于未来方差的消息”分开。1996–2014 年，对冲一个季度到 14 年期限上的这类消息，平均是零成本的；只有意外、短暂的已实现方差被定价。他们举的例子是 2011 年的债务上限之争：1 个月方差互换从 6 月底的 16.26 涨到 7 月底的 25.96，已实现波动却一直在 15 左右——然后 8 月的已实现波动是 47.18。在 [19 个期权市场](https://www.nber.org/system/files/working_papers/w26323/w26323.pdf)里，gamma 的溢价为负、vega 的溢价为正，而且越深度虚值越极端。市场付钱躲的是那一拳，而不是对那一拳的恐惧。
3. **彩票。** 期权自带杠杆，受融资约束的投资者在别处拿不到这种杠杆；而[内嵌杠杆越高，风险调整后收益越低；做多低杠杆、做空高杠杆指数期权的组合，超额收益的 t 值为 6.3](https://nber.org/system/files/working_papers/w18558/w18558.pdf)。预测市场做了一个完全没有宏观风险的对照实验：在 Kalshi 上，[30 多万份合约里，10 美分的合约赢的概率低于 10%，吃单方平均亏近 32%，挂单方约 10%，而且政治、娱乐和经济数据类合约都有这种偏差](https://cepr.org/voxeu/columns/economics-kalshi-prediction-market)。0DTE 是同一个游戏的期权版：[散户在 S&P 500 期权上约 75% 的交易是 0DTE，每日到期推出以后散户日均亏损约 35.8 万美元，其中约六成是交易成本](https://ssrn.com/abstract=4404704)。

所以一个 short-vol book 卖的是两样东西。保险（平值附近的指数 put，也就是 PUT 指数的原材料）赚的是承担跳跃风险的钱；杠杆和彩票（深度虚值和超短期的合约）赚的钱则不需要用任何崩盘来解释，Kalshi 的娱乐类合约就是证明。挂单和吃单之间的差距还说明，执行本身就是溢价的一部分，而不是从溢价里扣掉的一行成本。

</details>

## 期权市场的再保险公司

每一类都在做一件别的资产做不了的事。Short vol 赚的是承保利润，而不是 equity beta；relative value 的收益不跟任何东西一起动；股票跳空下跌时，只有 long vol 和 tail 的赔付由合约保证。而对整个市场来说，vol fund 是再保险公司：期权需求天然单边，dealer 再也无法 warehouse 这些风险，总得有人收一笔钱，把它扛下来。

<details class="more" markdown="1">
<summary>各自的理由与证据</summary>

对投资人：

1. **Short vol** 是 equity beta 之外的一种风险溢价：保险的承保利润，60/40 组合吃不到。
2. **Relative value** 是真正低相关的收益。Sharpe 1.18、年化波动 3.9%、回撤 6.5%，在对冲基金策略里很稀缺；Dominicé 发现，[S&P 500 加上 Long Volatility 和 Relative Value Volatility 指数的组合年化约 7%，Sharpe 是指数的两倍以上](https://www.dominice.com/news-performance-analysis-of-long-volatility-and-relative-value-volatility-strategies-2/)。但这份低相关不可能来自 skew。[Kozhan、Neuberger 和 Schneider](https://openaccess.city.ac.uk/id/eprint/15209/) 发现，1 个月期 S&P 500 skew 里将近一半是风险溢价，可偏度风险和方差风险几乎是同一个风险：只捕获其中一个、对冲掉另一个，溢价就所剩无几。净 short skew 的 relative value book，是换了件衣服的 short variance；低相关只能另找来源：dispersion、期限结构或跨资产交易。
3. **Long vol 和 tail** 是唯一一类这样的暴露：股票跳空下跌时，由合约保证、立刻赔付。债券在 2022 年没能完成这个任务，[股债的相关性也在上升](https://www.goldmansachs.com/insights/articles/hedge-funds-have-momentum-after-posting-double-digit-returns-last-year)。数学上的理由是 volatility tax：复利增长率约等于算术均值减去方差的一半，深回撤对复利的伤害是非线性的（−50% 需要 +100% 才能回本）。一个 hedge 如果每年成本约为[每保护 10 亿美元花 500 万美元](https://www.financial-planning.com/articles/calpers-missed-a-1-billion-payday-by-scrapping-market-hedge-ahead-of-the-coronavirus-outbreak)，又能把 −34% 的回撤变成 −6%，长期 CAGR 反而更高。有人用 2006–2020 年的 Cboe 期权数据独立复制了 Universa 式策略，[得到年化 11.0%，与 Universa 自称的 11.5% vs SPX 7.9% 基本一致](https://api.advisorperspectives.com/articles/2020/07/13/empirical-support-for-tail-risk-strategies)。hedge 还能释放风险预算（100% 持有风险资产，而不是 60/40），而且赔付恰好在资产最便宜的时候到账。CalPERS 是反面教材：它[2017 年雇了 Universa 和 LongTail Alpha 做 tail 保护，后来赎回，被放弃的 Universa 头寸 2020 年 3 月回报约 3,600%](https://www.bloombergquint.com/markets/calpers-forfeited-a-1-billion-payday-by-scrapping-market-hedge)——白白错过了超过 10 亿美元，这笔钱本可以用来抄底。

对市场来说，理由是结构性的。期权需求天然单边：机构系统性地买 index put、卖 call，结构化产品把长期 vega 和 correlation 风险倒给 dealer。2008 年之后，dealer 的 balance sheet 再也无法 warehouse 这些风险，只能由别人收钱扛下来。Short-vol 基金压低了所有人的保险价格；long-vol 基金在崩盘时变现，卖 put、卖 VIX call，成为那一刻为数不多的流动性提供者；relative-value 基金让 vol surface 在 skew、期限、跨资产和 dispersion 各个维度上保持定价一致。就连在 contango 里机械 roll、持续 bleed 的 VIX ETP，也需要有人站在对面。

“再保险公司”不只是一个比喻。[Chen、Joslin 和 Ni](https://www.nber.org/papers/w25573) 从深度虚值指数 put 的交易里读出 dealer 受到的约束：put 变贵、同时公众买得更少，说明收紧的是供给端；这种时期伴随着期权变贵、各类资产的风险溢价上升、融资流动性恶化和券商去杠杆。[Barras 和 Malkhozov](https://www.bis.org/publ/work521.pdf) 发现，期权市场和股票市场里分别量出来的方差风险溢价走势一致，但并不相同；两者的差距随中介机构的财务状况起落，[有时超过每年 3%，是平均溢价本身的两倍](https://www.fmg.ac.uk/sites/default/files/media/Malkhozov_0.pdf)。[Muravyev](https://doi.org/10.1111/jofi.12380) 发现，做市商的库存风险对期权价格的影响，比知情交易还大。Short-vol 基金赚的钱，有一部分其实是 dealer 稀缺资产负债表的租金，而租金就有租金的脾气：dealer 受约束时它最高（表现为 put 更贵、公众买得更少）；收益类基金、QIS 和 short-vol 资本涌进来时，它应该下降。这是整个类别的容量上限，而不只是某一只基金的。

为什么交给基金而不是自己做，是一个运营问题：margin、Greeks、在稀薄的深度虚值期权里执行，以及变现的纪律。同一个想法，不同的人做出来天差地别，这就是这门生意的全部——TAIL 的 −44% 和 Ambrus 2022 年以来的 +51.48%，都叫“买尾部保护”。需求还在上升：HFR 统计 [2025 年新发对冲基金 562 只，四年新高，投资者加配了押注波动率上升的策略](https://www.hedgeweek.com/hedge-fund-launches-hit-four-year-high-as-investors-brace-for-volatility/)；Aberdeen 的 2025 年下半年展望[对 RV 和方向性 vol 策略都转为看好](https://www.aberdeeninvestments.com/en-us/institutional/insights-and-research/h2-2025-hedge-fund-outlook)。

</details>

## 反方：AQR 的龟兔赛跑

反对 tail fund 的论证比支持它的更老。AQR 的说法是：保险的长期成本高于赔付，而在慢熊里，trend following 防守得更好。历史按崩盘的速度分成两半——2020 年的快崩盘是期权赢，2022 年的慢熊是 trend 赢。需不需要 tail fund，取决于你怕的是哪一种，以及你买保险的价格。

<details class="more" markdown="1">
<summary>AQR 的论证与证据</summary>

AQR 2011 年的 [*Chasing Your Own Tail (Risk)*](https://caia.org/media/4891/download) 认为 tail 保险的长期成本高于赔付，并给出五种替代方案：按风险而非资产分散、主动管理波动、加入低相关的另类资产、利用低 beta 股票、事先写好危机预案。[Ilmanen、Thapar、Tummala 和 Villalon（2021）](https://www.Aqr.Com/-/media/AQR/Documents/Journal-Articles/Journal-of-Systematic-Investing-Vol-1-Issue-1--Tail-Risk-Hedging-AQR.pdf?sc_lang=en) 比较了 OTM 指数 put 和多资产 trend following，结论是总体上 trend 更有说服力，除非投资者主要担心快速下跌。

AQR [2022 年的后续研究](https://www.wealthmanagement.com/equities/hedging-tail-risks-tortoise-versus-hare)把规律摆了出来：2020 年 2–3 月的短促下跌里，tail hedge 基金和买 put 表现最好；2022 年 1 月开始的漫长下跌里，trend following 表现最好，而期权类策略的崩盘保护，是拿长期为负的平均回报换来的。Harvey、Hoyle、Rattray、Sargaison、Taylor 和 Van Hemert（2019）发现，持续持有短期 S&P 500 put 是最可靠的防御工具，也是最贵的，全样本回报 −7.4%。FactorResearch 比较 2007–2020 年的 tail-risk 基金与类现金资产，发现[风险调整后收益和回撤相近，而 tail 基金往往在最不划算的时候最抢手](https://www.advisorperspectives.com/articles/2020/05/06/an-aqr-warning-and-a-3-612-return-fire-up-the-black-swan-debate)。

Macro Risk Advisors 的 Dean Curnutt 一句话说完：tail hedging 有效，但价格非常重要。

</details>

## Ambrus：不 bleed 的艺术

Ambrus Group 运营一只 carry-neutral 的 tail 基金：一个 long vol book，房租由短期、以日内为主的期权交易来付。按它自己报的数字，它在正常月份大致持平，在尾部事件里暴涨；过去 24 个月的收益，几乎全部来自三个事件月。

{% include posts/shape-not-return/table-ambrus-zh.html %}

{% include posts/shape-not-return/fig-4-zh.html %}

从左往右看：二十四个月，三级台阶。那段几乎走平的“其余 21 个月”，就是 carry-neutral 的全部主张——和文中所有关于 Ambrus 的数字一样，都是根据基金自报的数据算出来的。

真正要盯的是规模：资产从 2024 年的约 5000 万美元涨到 2026 年接近 10 亿美元，而公司自己曾经估计的容量是 5 亿美元。

{% include posts/shape-not-return/fig-5-zh.html %}

虚线是公司自己给的数字。线以上的每一块钱，都是 bleed mitigation 这台引擎当初没打算扛的。

<details class="more" markdown="1">
<summary>这台机器怎么运转</summary>

Ambrus 自称是芝加哥风格的自营交易公司和 tail 策略的合体。旗舰 Ambrus Volatility Fund [2022 年 5 月成立；公司 2020 年 9 月注册，2021 年 1 月起用 SMA 交易](https://www.open-funds.ch/sites/default/files/2025-05/202504%20NEW%20REVS.pdf)。联合 CIO [Kris Sidial](https://londonstrategicedge.com/directory/fintech-founders/kris-sidial/)（Xanthus Capital、Chimera Securities 自营，BMO exotics desk 近四年）和 William Wise 管 book；Sal Abbasi（Citadel，2006–2012）负责量化风控。基金不加杠杆，账上留着大量现金；Sidial 把[自己 60% 的流动净资产放在基金里](https://www.opalesque.com/709388/tail_risk_strategy_profits_from_monetization_during938.html)。

形状和 Sidial [2022 年对 Forbes 说的](https://www.forbes.com/sites/jacobwolinsky/2022/10/07/this-fund-manager-says-tail-risk-events-like-the-pandemic-are-only-going-to-increase/)目标一致：正常市场持平到微亏，尾部事件里陡升。把过去 24 个月拆开：三个事件月复利下来约 +47%，其余 21 个月合计约 +4%。零 bleed，数据上确实如此。

按 [The Hedge Fund Journal 2024 年的深度报道](https://thehedgefundjournal.com/ambrus-groups-carry-neutral-tail-risk-hedge-fund/)，mandate 只有三行：把持有保护的成本压到最低；在 vol spike 时获利了结，原则上是 VIX 超过 40；始终保留足够的尾部保护，以防 vol 继续上行。这个 book 靠两台引擎运转。Loss mitigation 在整个 VIX complex 里（VIX 期权、指数衍生品、ETP）买保护，优化期限和行权价、盯着 flow，按峰值赔 100–200 倍来设计：VIX 在十几的时候买入的 VIX call，等 VIX 冲到 50–70，赔的就是这个倍数。Bleed mitigation 是一组自营策略：以日内为主，有风险上限，只用普通上市期权；交易的是对冲行为、期限结构、日内成交量和个股的过度反应，胜率和盈亏比只比抛硬币好一点，公司把自己的优势比作赌场的 51%。这部分利润大多回灌去买保护，交易亏损时也保留一个保护下限，预判 spike 临近时还可以加保护。

Long gamma 放在[两周到两个月的上市期权](https://podscripts.co/podcasts/the-derivative/the-kid-who-kaptures-kurtosis-with-kris-sidial-of-ambrus-group)里，论点是期限结构前端有 dealer 对冲带来的 excess variance，而且 2017 年以来的大行情多在六周内走完。基金买便宜的 skew 和两侧的 wings，偏好有持仓失衡的个股和板块，而不是单纯的 SPX put，也接受自己 70–80% 的时候是错的。2025 年 4 月最赚钱的，是一到两个月的 OTM S&P 500 合约和一到三个月的 OTM VIX 合约。Short vega 永远用 spread cap 住，long gamma 从不 cap。公司最怕的是 belly：vol 升了，wings 却不跟，两边同时亏。变现靠判断（hedge fund 和 dealer 的持仓、vol of vol、基本面背景都算数），但守一条规则：先卖到让交易“免费”，再分层卖。允许吐回利润，不允许整笔交易亏钱。

规模是最值得盯的变量。2024 年 9 月，公司在没有 seeder 的情况下募到约 5000 万美元，自估容量约 5 亿。2025 年春，公司资产约 1.15 亿；[Form ADV 显示截至 2026 年 3 月 1 日约 4.85 亿美元](https://radientanalytics.com/firm/adv/the-ambrus-group-llc-316761)，其中[主基金 4.395 亿，157 个投资人，起投 25 万美元](https://aum13f.com/firm/the-ambrus-group-llc)。2026 年 4 月的投资者信说 AUM 正逼近 10 亿美元，7 月 1 日起 soft close，大型 multi-strategy 对冲基金也在支持者之列。Wise 说过，bleed mitigation 的 alpha 远不如 loss mitigation 那一侧好扩展。

</details>

## Plumbing 论

这个 book 背后是一个信念：大约 2017 年以后，美股的波动更多是衍生品市场的 plumbing（dealer gamma、结构性 vol 供给、VIX 的算法）制造的，而不是基本面。2024 年 8 月验证了 plumbing 这套机制；但四个事件验证不了“崩盘频率会翻倍”这个预言。剩下能交易的只有两句话：spike 相对股票跌幅会更大，所以持有深度虚值的 wings 和 VIX call；spike 会更短，所以在 spike 里卖。

{% include posts/shape-not-return/fig-6-zh.html %}

65.7 这个点位和期货那条线之间的缺口，就是这套论点画出来的样子：指数可以冲过任何人真正愿意交易的价格，而 VIX call book 是按期货赔付的，不是按 VIX 指数本身。

<details class="more" markdown="1">
<summary>机制与可检验的判断</summary>

公司 2022 年 5 月的论文 *Volatility and the Changing Market Structure Driving US Equities* 列出了四个反身性回路。净 short gamma 的 dealer 必须追涨杀跌，放大行情；long gamma 的 dealer（这个头寸来自 belly 里海量的 overwriting 和收益类基金供给）则压住行情。两者并存，所以市场一直平静，直到价格离开 belly 进入 wings，dealer 从稳定器变成助燃剂；跳空则完全无法对冲。结构化产品给银行留下路径依赖的暴露，平静时向市场供给 vol，接近障碍价时反过来要买 vol。被动的市值加权资金，是集中在少数几只股票上的动量资金。2008 年后的监管拆掉了缓冲器：dealer 不能 warehouse 风险；流动性来自算法，而算法给的盘口深度是顺周期的；期权名义量已经超过现货成交量。结论不是预测崩盘，而是一个频率判断：[以前每个周期一次的事件，频率会翻倍](https://www.forbes.com/sites/jacobwolinsky/2022/10/07/this-fund-manager-says-tail-risk-events-like-the-pandemic-are-only-going-to-increase/)。

另外三个判断更容易检验。

**结构性 vol 供给。** Ambrus 估计 [2018 年以来 short vega 名义翻倍、衍生品收益类基金资产增长十倍](https://thehedgefundjournal.com/ambrus-groups-carry-neutral-tail-risk-hedge-fund/)，multi-strategy pods 和 QIS 的 dispersion 交易还在继续加大这股压力。这类资金流会改变价格：[Muravyev 论文的早期版本](https://lfe.hse.ru/news/44287880.html)发现，到期时的展期卖压足以让其他到期日的期权价格下跌 5.7%。被压低的隐含波动率让凸性在平静期变便宜；一旦卖方被迫减仓，就会出现空头回补式的 spike（即便有对冲的 short-vol 基金也要回补一部分）；之后同一批卖方回来，再把 vol 压下去。这就是 spike 呈 V 型、也是公司在 spike 里卖出的原因。不过“便宜”需要一个脚注。[Park](https://www.federalreserve.gov/pubs/feds/2013/201354/201354pap.pdf) 发现，VVIX 上升会让虚值 S&P 500 put 和 VIX call 变贵，并压低它们随后三到四周的收益（VVIX 每上升一个标准差，次日 put 的收益低 1.32–2.19 个百分点，call 低 0.68–1.01 个百分点），所以 VVIX 低时 wings 便宜。而陡峭的期限结构，也就是平静市场的常态，[预示着方差互换、VIX 期货和跨式的低收益](https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/risk-premia-and-the-vix-term-structure/56572D1F060448571BD8F597C732D9C3)。平静可以让 wings 变便宜，却不会让 belly 变便宜。

**更 leptokurtic 的 VIX。** 2022 年 12 月的论文认为，下一次极端崩盘里 VIX 会打出前所未见的点位：VIX 用所有 OTM 行权价的报价中间价计算，直到连续两个零 bid 为止，而短期期权交易加上做市商集中，让它用到的 23–37 天期权流动性变薄了。2024 年 8 月 5 日，VIX 在凌晨 3:15 盘前交易开盘后 15 秒内从 23.9 跳到 42，8:30 超过 65，而前月期货始终在 35 以下。[SEC 的工作论文](https://sec.gov/files/dera-vix-working-paper-2504.pdf)发现更深的 put 进入了计算（纳入的最低行权价从约 2,700 跌到最低 1,400），但最多只贡献了 6 个点；真正的推手是被价差撑高的中间价：3,500 行权价 put 的买卖价差从约 0.2 美元撑到 15 美元以上，ATM put 从 1 美元以内撑到 50 美元以上。[BIS](https://www.bis.org/publ/bisbull95.htm) 的结论是 VIX ETF 和 dispersion 交易都不太可能是主因。这个论点对 VIX 点位说对了，对期货却一言未发——这正是 VIX call book 的陷阱：期权按期货盯市，所以只出现在现货指数上的 spike，要撑过开盘才能变成钱。

**0DTE 期权。** Ambrus 2023 年 4 月的论文 [*Dispelling False Narratives About 0DTE Options*](https://static1.squarespace.com/static/5f6299603ceb25330f902e7d/t/644beff4e8d2ee6519d85da2/1682698232481/Ambrus+Capital+-+Dispelling+False+Narratives+About+0DTE+Options.pdf) 是为反驳摩根大通的“Volmageddon 2.0”警告而写的。它调查了十家做市商，结论是机构（RIA 的 overlay 和 yield 策略、做市商、事件对冲者、vol 基金）主导了 flow；正常日子里终端用户是净卖方，所以 dealer long gamma、起稳定作用；例外是终端用户净买 put 的恐慌日。论文估计，2022 年 10 月 13 日如果 S&P 500 跌回日内低点，dealer 需要卖出超过 100 亿美元的 delta。它的结论（[波动率的加速器，不是制造者](https://issuu.com/gig2022/docs/srpinsights_q3_23_web/s/27053577)）经受住了检验：2024 年 8 月的 spike 发生在盘前，当天的 0DTE 还没开始交易，[一篇学术研究](https://ssrn.com/abstract=4692190)也发现 0DTE 上的高未平仓 gamma 不会传导、放大已经发生的波动。对一家 long-vol 机构来说，同一件工具反而是武器：在要紧的那一天“租”gamma 和事件风险，而不是扛一整个月。到 2026 年 2 月，[0DTE 合约占 SPX 成交量的 63%](https://www.pulse.bot/options-derivatives/news/how-0dte-options-can-explain-market-movement-611d9cb0-daa9-4f85-84d2-f40c9ebb3639)。

经得起推敲的是机制：dealer gamma、结构性供给、VIX 算法，2024 年 8 月全部验证了。经不起的是频率判断，四个事件定不了案；一个既能解释长期平静、又能解释突然爆发的理论，对时机什么也说不出来。能拿来交易的，只剩两句话：spike 相对股票跌幅会更大，所以持有深度虚值的 wings 和 VIX call；会更短，所以 40 以上就卖——或者按 VVIX 的证据，在 vol of vol 高的时候卖，而不是盯着一个固定的 VIX 水平。

</details>

## 零 bleed 不是免费的

给 tail 基金打分，就用 Sidial 自己给的尺子：拿预期 bleed 去比崩盘时的预期赔付（崩盘要事先定义好），而且按投资人的整体配置来算。用这把尺子一量，两个产品分得清清楚楚：按每单位 bleed，Ambrus 无人能及；按每一块钱配置，Universa 的崩盘赔付大约是它的五倍。Carry neutrality 的代价是凸性；既然只有真正发生的跳跃才带溢价，能在跳空中赔付的保护就永远要花钱。房租总有人付，问题只是谁付。

<details class="more" markdown="1">
<summary>完整的比较与未解的问题</summary>

Sidial 自己的框架：用预期年 bleed 除以预期崩盘回报；事先定义崩盘（S&P 500 一个月跌 20%，或 VIX 接近 70）；像评价守门员一样，按扑救而不是进球打分；持续持有；小仓位；按投资人的总配置、而不是某一笔交易里的资本计算回报。

Universa 作为 3.33% 的配置，2020 年 3 月给整个组合贡献了约 13 个点（对冲后 +0.4%，不对冲 −12.4%），持续成本每年约为被保护名义金额的 0.5%。Ambrus 2025 年 4 月自身 +25.21%，持续成本接近零；配 10% 的 allocator 拿到约 2.5 个点。按每单位 bleed，Ambrus 赢；按每单位配置，Universa 的崩盘赔付大约是它的五倍，而在 2008 式持续数月的下跌里，差距只会更大，因为“40 以上卖出、保留下限”这条规则，把纯凸性本来敞开的那部分赔付封了顶。这是对已报数字的粗算，不是同口径回测。Carry neutrality 买到的，是把策略当作独立头寸、而不是成本中心来持有的能力。

这个权衡不是 Ambrus 特有的，而是市场给风险定价的方式。如果只有真正发生的跳跃才带溢价，任何在跳空中由合约保证赔付的头寸都必须付出代价。一只零 bleed 的 long-vol 基金因此是一个配方，可能的成分有三种：以 vega 为主的保护——便宜甚至有正收益，但在跳空中不保证赔付；一份补贴保护成本的独立 alpha；或者同时卖出的另一份溢价，比如被 cap 住的 short vega。该要求基金把这三项拆开给你看。同样的证据也能检验前端论点：平均而言，短期虚值 gamma 是整条曲线上最贵的位置，所以“前端有 excess variance”要成立，Ambrus 挑的合约就必须跑赢这个平均。检验办法是：在计入 bleed mitigation 之前，单独看 long book 的 realized 减 implied。

两个问题还悬着。Bleed mitigation 策略的“不相关”是在平静市场里测出来的；日内 alpha 能否在连续多日跳空、买卖价差炸开的环境里活下来，还没有被检验，而它一旦失效，恰好会在 long book 赚钱的时候让 carry neutrality 失灵。如果这份 alpha 有一部分来自昼夜不对称（期权开盘偏便宜、收盘偏贵），那它依靠的是一个有文献记录的异象，而不是赌场的 51%，也值得问一句：昼夜不对称能解释多少 P&L。还有容量：2024 年自估容量 5 亿的公司，2026 年正逼近 10 亿。如果 bleed mitigation 无法扩展，要么 short book 做大、基金漂向 short vol；要么不做大、基金退回普通 tail 基金的 bleed。检验标准是：10 亿规模下，下一个 2023 年还能不能做到 +1.7%。

</details>

一句话收尾：波动率基金卖的是形状，而每一种形状都有它的价格。

</div>
