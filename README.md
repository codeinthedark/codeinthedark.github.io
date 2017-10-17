# What is [Code in the Dark](http://codeinthedark.com)
[Code in the Dark](http://codeinthedark.com) is a front-end (HTML, CSS) competition, originating from [Tictail](https://tictail.com), where each contestant compete to implement a website design given only a screenshot. The catch is that no previews of the results are allowed during the implementation, and no measuring tools can be used. The winner is decided by the audience.

During the competition, the contestants have to use our custom editor for Code in the Dark, which [you can try out here](http://codeinthedark.com/editor).

# The Rules
* Each contestant receives a bundle of the editor, which includes a screenshot of the page they should implement with HTML/CSS and any additional assets they might need.
* No iframes, frameworks, snippets or other assets outside of the ones listed in the instructions are allowed. The site should be built from scratch during the competition.
* The contestant should have the editor in full screen mode, and is never allowed to exit out of it or use any measurement tools.
* Previews of the results are strictly forbidden until the time is over.
* Once the 15 minute timer runs out each contestant presents their result to the audience, who then vote on their favorite to decide the winner.

# Arranging your own Code in the Dark
Code in the dark is open sourced - you can use the editor and rules to host your own community event as long as you follow some basic guidelines. To host your own event, create a pull request (following [these instructions](https://github.com/codeinthedark/codeinthedark.github.io#creating-the-pull-request)) in this repository to have it announced on the [codeinthedark.com](http://codeinthedark.com) website. Your page should reference back to the official Code in the Dark website [codeinthedark.com](http://codeinthedark.com). Please read through and make sure you understand [the license](https://github.com/codeinthedark/codeinthedark.github.io/blob/master/LICENSE) before using the Code in the Dark name or logo in your event. Community events may not be of commercial nature; you may not charge entrence or participation fees for Code in the Dark, neither a direct fee or indirect as part of another event.

Read the instructions below on how to run a community event. If you have any questions or need any help like hi-res pictures, best practices or anything else, please don't hesitate to contact us at hello@codeinthedark.com!

### Setting Up the Competition
Each contestant bring their own laptop to the event, but it is recommended that you provide them with an external monitor each. These monitor should be turned facing away from the contestant and towards the audience, so that they can follow along during the competition. 
Depending on the number of contestants you might want to split the competition up into multiple rounds, with 10 contestants in each group and a grand final match consisting of the top placers from the previous rounds.

Website screenshots and assets should be prepared beforehand for each group (use different websites in each round) and are included with the editor bundle that each contestant receives. It's recommended to have the bundles available on USB sticks that the contestants can copy the contents from. Read more in the [editor repo](https://github.com/codeinthedark/editor) on how to prepare the assets and set up the editor.

Before the round starts, help the contestants with setting up the editor and make sure they put their browser in **presentation mode** with screen mirroring enabled on the external screen. Make sure they don't begin coding before the timer starts.

Since the audience will be the judge, let them clearly know what the rules are so that they can easily spot anyone who is cheating and disqualify them from the competition.

When you are ready to start the round, count everyone down and set a 15 minute timer that the audience can clearly see. Once the 15 minutes are over tell everyone to stop coding, save their file and open it up in their favorite browser for everyone to vote on. Use a voting service like https://www.mentimeter.com/ to make it easy for everyone to vote.

### Instructions to the Contestants
Print the following instructions out and make it available for each contestant to see, by for example attaching it to the monitor in front of them that is facing the audience.

1. Connect the monitor and enable **screen mirroring**.
1. Wait for the crew to transfer files from a USB stick to your computer.
1. Only open the editor **index.html** file and set your browser to **presentation mode**.
1. The editor contains further instructions about assets and how to save the final file.
1. When time runs out, take your hands off the keyboard.
1. Do not leave the editor during the competition!

### Creating the Pull Request
To get your event featured on the [codeinthedark.com](http://codeinthedark.com) website, create a pull request in this repository adding the following code below the "Community Organized Events" section:

```html
<p>
[CITY] &middot; [DATE] &middot; <a href="[LINK_TO_RSVP_PAGE]" target="_blank">RSVP</a>
</p>
```

Replace `[CITY]`, `[DATE]` and `[LINK_TO_RSVP_PAGE]` with your information. Here's an example:

```html
<p>
Stockholm &middot; January 22, 2016 &middot; <a href="http://example.com" target="_blank">RSVP</a>
</p>
```
