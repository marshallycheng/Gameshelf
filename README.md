# Gameshelf
[Live site](https://gameshelf-fsp.herokuapp.com/#/)

Gameshelf is a web application for game reviews, inspired by Pinterest. Gameshelf is intended to be a hub for game-lovers to share their opinions on games they love, hate, and anywhere in between. The project was built in about 70 hours of work, though I intend to continue adding features in the future.


![Home page](https://i.imgur.com/jGoi86m.png)


## Features

* Games 
  * Users can view a full library of popular games, as well as access particular show pages.
  * Individual game pages provide detailed information on that particular game, including overall score, release date, genres, and a link to purchase the game.
* Reviews
  * Users have the ability to provide a text-based review as well as a numeric rating out of 5. 
* Search
  * Users have access to a search feature that allows quick navigation to any game's show page. Searching is based on game title, and accounts for misinputs with a fuzzy search algorithm.
* Profiles
  * Users can view profiles of any other user. Profiles display some basic information about a user's interaction with the site and also displays a list of games they've favorited.
* Favorites
  * Users have the ability to favorite a game to add it to their personalized collection on their profile.
  
![Discover page](https://i.imgur.com/buh0oeI.gif)


## Technologies Used

* Backend
  * Database: PostgreSQL
  * Routing, Controllers, and Models: Rails
  * Auth: BCrypt
* Frontend 
  * React with Redux for state management
  * jQuery(only for AJAX requests)
  * jBuilder for backend requests
  * Styling and animations done with SCSS/CSS
  
## Hightlights

### Search

Search was implemented with a fuzzy search algorithm to allow users to find what they're looking for regardless of missed inputs. 

```ruby
#Allows users to miss inputs.
#Favors showing too many results rather than too few to benefit the user.
 def self.search_by_title(query)
    fuzzy_query = "%" + query.downcase.split('').join('%') + "%"
    @games = Game.where("lower(title) LIKE ?", fuzzy_query).limit(10)
  end
```
Incorporated debounce into the search feature in order to make fewer queries and also not overwhelm the user with unnecessary results. (Needed to persist the event due to how React handles Event Pooling) 
[Read more about Events in React](https://reactjs.org/docs/events.html) 

```javascript
//Debounce function
 debounceSearch(func, delay) {
    let inDebounce;
    return (e) => {
      e.persist();
      clearTimeout(inDebounce);
      inDebounce = setTimeout(func.bind(this, e), delay);
    };
  }
  
  //input with onChange event that passes thunk action as callback to debounce
  <input type="text" maxLength="100" placeholder="Search" onChange={this.debounceSearch(this.performSearch, 250)}/>
```


![Search](https://i.imgur.com/71164hf.png)


### Login Background

One thing I really wanted to incorporate was a animated background. Infinite-scroll backgrounds are normally made with simple, repeating patterns. Beautiful splash arts are the exact opposite. In order to make an infinite-scroll background with stunning landscapes, I created a keyframe css animation to pan across an image gradually. I also used a function to iterate through a number of backgrounds that would gradually transition from one to the other. I chose large, high-resolution images in order to increase the time it takes to hit the edge of the image. Lastly, I added a css property to pan back and forth at the edge of the image to avoid awkward transitions from hitting the edge of images. 

![Login Background](https://i.imgur.com/9l1m5lp.gif)

#### CSS to make scrolling background
```css
.session-background {
//initial background image to mask loading time of actual background
  background:
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://images3.alphacoders.com/716/716166.jpg');
  background-size: cover;
  background-repeat: repeat-x;
  animation: animate-background linear 16s infinite alternate;
  width: 100%;
  margin: 0px auto;
  overflow: hidden;
  height: 100vh;
  transition: 4s;
}

@keyframes animate-background {
  from { background-position: 0px; }
  to { background-position: -400px; }
}
```

#### Javascript query selectors to switch background images
```javascript
this.bgImageArray = [
      "https://i.imgur.com/ZBlD0d2.jpg",
      "https://i.imgur.com/qyFRZoK.jpg",
      "https://i.imgur.com/er56xcK.jpg",
      "https://i.imgur.com/bG0SSdk.jpg"
    ];
    this.secs = 5;

    this.bgImageArray.forEach((img) => {
      new Image().src = img;
      // caches images
    });

    this.backgroundSequence();
  }

  backgroundSequence() {
    {/* Credit to Dudley Storey for the original code snippet */}
	  window.clearTimeout();
	  let k = 0;

    for (let i = 0; i < this.bgImageArray.length; i++) {
		  setTimeout(() => {
			  document.getElementsByClassName('session-background')[0].style.background = "url(" + this.bgImageArray[k] + ") no-repeat center center fixed";
			  document.getElementsByClassName('session-background')[0].style.backgroundSize ="150% 150%";
			  document.getElementsByClassName('session-background')[0].style.backgroundPosition = "0px";
		    if ((k + 1) === this.bgImageArray.length) {
          setTimeout(() =>  this.backgroundSequence(), (this.secs * 1000))
        } else {
          k++;
        }
		  }, (this.secs * 1000) * i);
	  }
   }
```


### Future Features

Features that I'd like to include in the future are as follows:
* Twitch integration(to include streams and twitch chat)
* Uploading profile pictures
* Adding games to the library
* Improving search to include user search as well as more versatile game search(genres, tags, etc.)

