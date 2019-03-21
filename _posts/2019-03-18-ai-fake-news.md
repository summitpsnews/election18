---
title: AI can both catch and create fake news
authors:
- Avi Mehra
tags:
- Community
---

In the past few years, a new scam on Instagram has taken off in popularity. Accounts act as if they are affiliated with major—often fashion—companies and claim to be recruiting a small amount of young people, offering to give them free clothes, photo shoots and compensation in exchange for their actions. They are asked to share a post by the account, which is later sold to businesses due to the high amount of followers that the recruit has accrued. These accounts often have highly apparent mistakes or discrepancies that reveal that they are not authentic; yet, within a short period of time, these posts can become so popular and the accounts so high in followers that the companies being imitated take note and call out the scams.



![](https://summitpsnewsorg.files.wordpress.com/2019/03/lululemonfake-1-e1552689655720.png)
*@lululemon responds to a screenshot of an account impersonating them. GRAPHIC CREDIT: Twitter*

The enormous volume and extensive reach of these fake accounts highlights an ever-growing issue in today’s highly connected digital world: fake news.

Fake news and misinformation have led to [death threats toward innocent citizens](https://www.pbs.org/newshour/science/real-consequences-fake-news-stories-brain-cant-ignore) and have even [influenced political decisions.](https://www.technologyreview.com/s/612004/a-mathematical-model-captures-the-political-impact-of-fake-news/) Often times, internet users don’t have the time or capacity to determine whether or not content is authentic.

Summit Tahoma sophomore Isaiah Kemp explained how he defends himself from misinformation: “There’s a lot of sources that are saying that it’s like … it’s like it’s fake and then you can expose that it’s fake.” He said that we can trust the sources that are claiming that the other is fake “because there’s a lot of them; plus the ones that I have mostly checked for like sports and stuff, like they’re all reliable.”

Julian Medellin, a sophomore at Summit Tahoma, also explained the methods he uses to detect and counter fake news. “I check to see if there is an author, the date, and then make sure that it’s not on Wikipedia or anything,” he responded. “A lot of times those sources aren’t really reliable. A lot of times there’s people’s opinions.”

Medellin has a different strategy to ensure that content on social media platforms is fair and authentic: “I mean, I’m pretty sure you can tell when something’s been made up or something has been made up. So, you know, you just use your own judgment.”

The inadequate ability of students to verify the authenticity of information has given rise to tools and utilities that make predictions about digital content. [Web of Trust](https://www.mywot.com/) is an extension for multiple major browsers. It has an icon that is displayed in the browser and on results from major search engines. The icon has 4 possible colors: green, yellow, red and grey. The color of the icon depends on how secure the extension predicts the site to be, where green represents high confidence in security and grey represents there not being enough data to determine a rating. Information is received from both users of the extension and many trusted databases, such as [PhishTank](https://www.phishtank.com/) (which is operated by cybersecurity company Cisco). Implicit in how Web of Trust predicts security is how confident it is in the information. However, Web of Trust was not designed to combat fake news, but there are other tools that were specifically designed to solve that problem.

[NewsGuard](https://www.newsguardtech.com/) is a similar extension that attempts to verify the credibility of a website. The rating process for NewsGuard is entirely determined by their employees. This brings about issues of bias. Most of the reviews on the [Chrome Web Store](https://chrome.google.com/webstore/detail/newsguard/hcgajcpgaalgpeholhdooeddllhedegi) listing are negative and cite extreme political bias and misrepresentations of credibility. It is also not well-executed from a technical design perspective, as websites can have many subdomains and even pages with different levels of authenticity. Also, the fact that this is all done by employees limits the amount of detail that the extension can provide.

So here’s the question: if people don’t take the time to thoroughly fact-check the content that they see, and common tools don’t help, how can fake news and misinformation be prevented? A common thought is that fake or misleading content can get filtered out. Due to the sheer scale of the amount of information posted to websites on the internet, this task could not be done entirely by human moderators. A possible solution: AI.

###Can AI solve the fake news epidemic?

AI, or artificial intelligence, is a general term encompassing all situations where machines exhibit some sort of intelligence or intelligent properties. The uses of artificial intelligence are wide-ranging and comprehensive; AIs can be used in [playing chess](https://www.ibm.com/ibm/history/ibm100/us/en/icons/deepblue/) or [predicting stock market trends](https://www.bbc.com/news/av/technology-35405336/artificial-intelligence-takes-on-the-stock-market). In combating fake news, artificial intelligences usually need to “read” a text and understand it. This falls under a subfield of AI called natural [language processing—understanding](http://www.jmlr.org/papers/volume12/collobert11a/collobert11a.pdf) human language.

So can AI filter fake news? Yes, it can. Through tools such as [machine learning](http://science.sciencemag.org/content/349/6245/255), a subfield of AI where machines are trained and progressively learn to perform tasks, artificial intelligences can recognize patterns in news content that humans would not even be able to notice. In fact, Facebook is already using an AI to prevent the spread of fake news, but they have also hired and contracted fact-checkers. Limiting the spread of fake news is not the only solution that prevents fake news; misinformation can also be prevented by automatically flagging content as fake or by blocking it from being publicly posted.

The detection of fake news is a process akin to detecting email spam: a task that has already proven solvable with many effective methods from the likes of Google. Google software can also detect spam in text messages and even spam phone calls (without even hearing the call). However, as of now, the fake news detection technology is not nearly as effective as that of spam prediction and detection.

In 2017, the Fake News Challenge held a [competition](http://www.fakenewschallenge.org/) to create the best AI that can determine whether or not an article’s content agreed with its title. Participants were only allowed 48 hours to construct their whole artificial intelligence and publish their results. They were also restricted to only training their models using data provided by the FNC. The results of the competition show that the technology still needs development; although given the restrictions and limitations that would not be present in the real world, the technology looks promising.

In addition to companies like Facebook that are trying to develop AIs for their own use, other companies are looking to design and implement fake news detection and prevention AIs. One such example is London-based startup [Fabula AI](https://fabula.ai/). They have “developed (and patented) Geometric Deep Learning – the first AI technology able to learn from social networks.”

###Why might AI be ineffective against fake news?

AI almost entirely falls into two general categories: learning and non-learning. Non-learning AIs are still intelligent, but their procedures are programmed by the developers. When they make predictions, they need to run through that algorithm for each prediction made. Learning AIs, called machine learning models, get trained on data, and the AI learns its patterns. Then, when making predictions, the AI works extremely efficiently and delivers an answer in almost real time.

Machine learning models allow artificial intelligences to come up with generalizations and methods that humans could never generate. Non-learning AIs, however, require the human programmers to know exactly the best way to do a certain task. Obviously, due to the nuances, intricacies, and depth of language, fake news detectors must be machine learning models.

As such, the models need a lot of training data. The researchers and developers who make the models need to have hundreds of thousands or more examples of both fake news and real news, in addition to (for most models) a label for each (a label is a value specifying the accuracy of the text).

Often times, this data is difficult to obtain. It can be obtained from known credible and fake news sources. However, since it is copyrighted content, the developers would need permission from all of the sources. Especially for the fake news sources, it seems unlikely that they would consent to having their content used in training the AI.

Using known data is also very limiting. It restricts the model to only learning the patterns of modern fake news and not new styles of fake news that might develop. Also, since the models are not training on the best fake news, only the sources that they know are fake and have permission to use, it would assume all well-written articles are credible. This method also assumes that sources are always true or always fake, which is not accurate.

Another solution is using data created by the general public from sources such as social media posts. These seem like very good supplements to the published news sources. In fact, social media posts will be one of the most prominent uses of this AI.

###What are the data validity and security concerns?

Using social media sources has a different issue: ownership rights. Some people would certainly protest against their data being used for training an AI that limits content that they like. If their data is not included, fake news becomes underrepresented in the training data, leading to the model detecting fake news less than it should (this is called a lack of the IID condition).

People might even claim that their data (sometimes private, even if posted publicly) gets memorized by the AI and can theoretically get extracted through its predictions. This is an possible issue that can occur when certain pieces of training data are very specific during machine learning; the model cannot generalize certain patterns and rather ends up memorizing confidential information. This is what led Google to create TensorFlow Privacy. TensorFlow is a machine learning platform that was created and used internally by Google (one of the companies with the most advanced AI software) and made public on Nov. 9, 2015. On March 6, 2019, Google released TensorFlow 2.0, which includes TensorFlow Privacy. TensorFlow Privacy uses a statistical technique known as differential privacy to ensure  that specific details are not memorized. Differential privacy was already being used by companies working with sensitive data; now it is very easy for even the average developer to implement.

In addition to the privacy concerns in training the model, there are even more concerns with using the model. One issue is whether or not data is stored after running the model on it. This should not be a concern, though, because the data is clearly being stored anyway. The concern is with the general data storage and the platform, not the AI. This could, theoretically, be a concern if used to determine fake news in text messages, but not only is this a limited use case, there are very simple ways to audit the providers that are offering such predictive services.

###Why is AI so controversial?

People say that using AI to block fake news is censorship that infringes on their right to free speech. In a limited scope, this is true. However, there will always be a market for platforms without fake news censorship. That is the very nature of capitalist economies. The government is not engaging in the censorship, certain platforms are. Platforms are not mandated to engage in misinformation prevention, just as platforms are not mandated to make their content free with advertisements; companies have choice in their business model. Also, any attempt at blocking fake news can be seen and interpreted as censorship. To a limited degree, censorship is necessary.

A clear counterargument to the argument of censorship is the right to the truth. Per the Universal Declaration of Human Rights, people have a right to knowing the truth. Not limiting fake news is a violation of this right. Allowing fake news means allowing propaganda: corporate, personal and political. It can be said that it is the duty of corporations and those with advanced technologies to provide systems where people can converse and communicate, sharing information without a significant risk of falsified statements.

###What are the implications of using AI systems?

However, this is definitely not possible. There will always be some fake content that won’t get filtered. There will always be a risk of inaccurate information.

Once a good AI system is implemented, most of the fake content will get filtered. This will lead to people having even more trust in the content that is shown to them, and people will fact check even less than they currently do. People will develop overconfidence in the authenticity of the information. Some content will slip through the filters. A huge market will be created around making fake content that passes through the system. This content is much more likely to be believed than fake news is now. The implications of this would be huge.

The AI might also be accidentally or intentionally biased towards certain types of fake content (ex. if left-wing propaganda is okay in moderation, but right-wing — even true content — gets blocked).

###How is fake news technology advancing?

New technologies are entering the market which can create hyper-realistic fake news works. We have had “fake news generators” for a while now. Users can enter a headline, and the generator creates an image that looks like the coverage of a television news show. These are very easy to prove as fake, as they all look very similar, and one can just search the headline. These are not often used for malicious purposes, rather they are used for internet memes, yet they still fool millions.

![](https://lh5.googleusercontent.com/H9IUg_rIDXC6-5DgafAK4gYuE99eoONO-bsAZKBYrXUK7aS-JVM537kE_ZdPpXLsMK5a5d9ItuvShWrF9kV3Bi0JE27XQ1amsKYa8TZX4pClz3F_Uqz0KRODISgoWWBqaa9_4LZw)
*Break Your Own News is one of many “fake news generators.” GRAPHIC CREDIT: https://breakyourownnews.com/*

In addition to these generic image modifiers, we have sophisticated technologies with huge potential of being used maliciously. There is a breaking AI that generates actual, good quality articles with completely false information, and people cannot tell it apart from real news.
OpenAI, an AI research company backed by Elon Musk, has developed an artificial intelligence that generates fake or artificial text from a short prompting text. [The model](https://blog.openai.com/better-language-models/), called GPT-2, can generate fake articles that are virtually indistinguishable in style and structure from professionally-written and even accredited news articles.

To prove how effective GPT-2 is, OpenAI released a few outputs of the AI to the public. When prompted with the two sentences:

>"A train carriage containing controlled nuclear materials was stolen in Cincinnati today. Its whereabouts are unknown."

The model wrote:

>"The incident occurred on the downtown train line, which runs from Covington and Ashland stations. In an email to Ohio news outlets, the U.S. Department of Energy said it is working with the Federal Railroad Administration to find the thief. 'The theft of this nuclear material will have significant negative consequences on public and environmental health, our workforce and the economy of our nation,' said Tom Hicks, the U.S. Energy Secretary, in a statement. 'Our top priority is to secure the theft and ensure it doesn’t happen again.' The stolen material was taken from the University of Cincinnati’s Research Triangle Park nuclear research site, according to a news release from Department officials. The Nuclear Regulatory Commission did not immediately release any information. According to the release, the U.S. Department of Energy’s Office of Nuclear Material Safety and Security is leading that team’s investigation. 'The safety of people, the environment and the nation’s nuclear stockpile is our highest priority,' Hicks said. 'We will get to the bottom of this and make no excuses.'" 

In addition to news and articles, the OpenAI model can also generate stories, essays and speeches. When given the prompt:

>"Recycling is good for the world.

NO! YOU COULD NOT BE MORE WRONG!!"

the model generated the text:

>"Recycling is NOT good for the world. It is bad for the environment, it is bad for our health, and it is bad for our economy. I’m not kidding. Recycling is not good for the environment. It is destructive to the earth and it is a major contributor to global warming. Recycling is not good for our health. It contributes to obesity and diseases like heart disease and cancer. Recycling is bad for our economy. It increases the cost of a product, and in turn, the price of everything that is made with that product. Recycling is not good for our nation. We pay a tremendous price for the privilege of having the world’s most advanced and efficient recycling system. Recycling is a huge, colossal waste of time, energy, money, and resources. And THAT is why we need to get back to basics and get back to basics in our recycling efforts. One of the best ways to start is to look at the process of creating a paper product. When you make a paper product, it is basically a long chain of materials. Everything from the raw materials (wood, cardboard, paper, etc.), to the reagents (dyes, solvents, etc.) to the printing equipment (chemicals, glue, paper, ink, etc.), to the packaging, to the packaging materials (mercury, chemicals, etc.) to the processing equipment (heating, cooling, etc.), to the packaging materials, to the packaging materials that are shipped overseas and to the packaging materials that are used in the United States. Each step along the way creates tons of waste that we constantly have to clean up. The process of making a paper product is a very wasteful one. But the end result is something that all of us need to consume. And if we want to keep the recycling process running efficiently, then we really need to think about each and every step that goes into making a paper product."

The model is so effective, and its implications in misinformation are so extreme, that OpenAI has refused to make the model public. OpenAI’s concerns, though, go deeper than fake news. GPT-2, if made public, could be used for impersonations, spam and even obscure uses like overly-realistic satire. However, it might not be all bad for GPT-2. OpenAI has taught it to summarize, answer comprehension questions on, and resolve ambiguous pronouns in passages. It has even been trained to translate texts. OpenAI’s GPT-2 might be an AI that can assist in detecting fake news, though no AI should be relied on entirely for tasks like that.

Fake text and prose generators are not the only technologies that can add to the fake news crisis. [Deep video portraits](https://arxiv.org/pdf/1805.11714.pdf) are a technology that allows a user to emulate their facial expression on the face of some other person. Jordan Peele, together with Buzzfeed, used this technology to make it appear that former President Barack Obama was [making comments on “Black Panther”](https://www.youtube.com/watch?v=cQ54GDm1eL0) and sitting President Donald Trump. Although the video component generated itself, Peele still had to write and voice the audio component. However, he didn’t need to.

Given just a few minutes worth of audio from a certain person, the free and public software Lyrebird can generate an audio clip of the person saying the contents of a text. This script could be generated from other AIs such as GPT-2, and an entirely fake (and quite believable) video of any person could be generated just from a seed sentence.

Charlie Warzel from Buzzfeed trained Lyrebird on his own voice, allowing Lyrebird to generate audio similar in sound to his speech. Warzel then called his mom, and [attempted to fool](https://www.buzzfeednews.com/article/charliewarzel/i-used-ai-to-clone-my-voice-and-trick-my-mom-into-thinking) her into believing that the audio was truly himself. When his mom was finally informed that the audio was not him, she expressed how realistic the generated audio sounded: “I never doubted for a second that it was you.”

###How can fake news target specific users?

There is also a risk of targeted fake news to individuals. People can be intentionally exposed to fake content and misinformation that they are determined to be more susceptible to.

Certain apps, without apparent affiliation with Facebook, have been [sending user data](https://www.theverge.com/2019/3/5/18252397/facebook-android-apps-sending-data-user-privacy-developer-tools-violation) (including app usage data) to Facebook, without user permission (or knowledge). Once the app is opened, the user tracking and data sending has begun. This happens even if the user is not signed in to Facebook and even if the user does not have a Facebook account. All of this data is personalized; Facebook knows from which person each packet of data arrived. Also, even without a Facebook account, Facebook knows who a person is by their unique ID (possibly a Google advertising ID) and can connect users between apps. Facebook knows exactly what you, personally, are doing at any point in time, and there is no reason any other app or company cannot do this. Then, the company that receives the data (in this case Facebook) can make their app extremely targeted and show you fake news that you are more prone to believe. In fact, Facebook is already doing this.

###What can we do?

There exists no perfect solution that allows content consumers to have no risk of being exposed to misinformation. Our fake news problems aren’t going anywhere. We all need to remain vigilant on the Internet as misinformation technology progresses. Although it’s not practical for everybody to extensively fact check every single fact that they come across, if there is a statutory or [shared-fate risk](https://security.berkeley.edu/data-classification-standard#shared-fate) from misinformation, users should ensure that the data is fair, factual and accurate.

