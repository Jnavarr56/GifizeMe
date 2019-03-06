# GifizeMe  :camera: :smiley:

GifizeMe is a full stack web app that lets you record and save gifs of yourself, associating them with emojis and sending them to your friends on Facebook. 

[gifizeme.herokuapp.com](https://gifizeme.herokuapp.com/)

###### CommuteCompare is deployed on Heroku and uses:

  - React
  - [React Router] (https://github.com/ReactTraining/react-router)
  - Amazon Web Services (S3 Bucket)
  - Ruby on Rails 5.2.2
  - [Gifshot](https://github.com/yahoo/gifshot)
  - Facebook OAuth API
  - PostgreSQL
  - Bootstrap 4


###### Build Tools

   - Webpacker
   - Yarn

###### Other libraries/frameworks/etc include:
- [Axios] (https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [Devise](https://www.google.com) - Flexible MVC based user authentication solution for Rails.
- [gemoji](https://github.com/github/gemoji) - A ruby gem providing a library containing character information about native emoji.

## User Features

*Screen shots coming soon!*

  - Sign up/sign in with Facebook.
  - Record gifs of your self with durations of up to 15 seconds.
  - Save your gifs under the name/character of an emoji.
  - Send your gifs to your Facebook friends.

## Development

REACT FILES PATH: app/javascript

This project required working with blobs and base64 file representations, which I had no prior experience with. Here, I'll briefly outline how I:

1) Take the base64 gif string and convert it to a blob.
2) Send the blob via a post request with Axios to the rails server.
3) Respond on the back-end by attaching the blob to a record.

##### STEP 1
The Gifshot library that creates the gifs produces a base64 version of the gifs and I needed a blob format so that I could send the gif via a post request to the server.  

The following function takes in a dataURI string and produces a blob (credit to [davoclavo](https://gist.github.com/davoclavo/4424731)).
```
dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        let byteString = atob(dataURI.split(',')[1]);
    
        // separate out the mime component
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    
        // write the bytes of the string to an ArrayBuffer
        let arrayBuffer = new ArrayBuffer(byteString.length);
        let _ia = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            _ia[i] = byteString.charCodeAt(i);
        }
    
        let dataView = new DataView(arrayBuffer);
        let blob = new Blob([dataView], { type: mimeString });
        return blob;
    };
```
I passed the base64 string produced by the Gifshot object's record method to the function in order to get the blob I needed. 

##### STEP 2
The next step was to attach the blob to the object sent in the post request. However, sending blobs isn't as simple sending other kinds of data like strings or numbers. 

One way to send a blob to the server via post request is to create a FormData object, append the blob to the FormData object, and send that object as the data in the post request. Below is a demonstration of this logic as a method of a React component:

```
    handleGifUpload() {

        // Just some basic header/CSRF token configuration stuff.
        const token = document.getElementsByName('csrf-token')[0].getAttribute('content');
        axios.defaults.headers.common['X-CSRF-Token'] = token;
        axios.defaults.headers.common['Accept'] = 'application/json';

        const obj = this; // <-- Needed to refence the component from within the scope of the post callback.

        // Create FormData object.
        const data = new FormData();

        // Append the blob acquired from the function in Step 1 to the FormData object
        // and give it a name.
        data.append('blobName', this.dataURItoBlob(this.state.imgCap.image));

        // Standard post request with Axios.
        axios.post(

            // Specify route, and include our FormData object as the data to send.
            '/upload', data, 
            // Specify the type of content we are sending in the header (image/gif of course).
            { headers: {'Content-Type' : 'image/gif;'} }

        ).then(function (response) {

            //Insert code to respond to respond to successful callback here.

        })
        .catch(function (error) {

            //Insert code to respond to error here.

        });

    }
```

##### STEP 3
In my rails controller in the method handling the '/upload' route:

```
#Create a new gif object.
new_gif = Gif.new

#Get the id of the corresponding emoji character stored in the database.
emoji_id = upload_params.keys()[0].to_i

#The id of the emoji character is the key in the upload_params object corresponding to the 
#blob, so we use that to get the blob from the upload_params object.
#Then, we attach the blob to the new gif object!
test.gif_file.attach(upload_params["#{emoji_id}"])
```

## Building/Development

I used Webpacker and Yarn.

GifizeMe uses Rails 5.2.2 with a PostgreSQL adapter and an AMS S3 bucket with Active Storage to store images.

My specs at the time of deployment are here:

```
Rails version             5.2.2
Ruby version              2.5.1-p57 (x86_64-darwin17)
RubyGems version          2.7.6
Rack version              2.0.6
JavaScript Runtime        Node.js (V8)
Middleware                Webpacker::DevServerProxy, Rack::Sendfile, ActionDispatch::Static, ActionDispatch::Executor, ActiveSupport::Cache::Strategy::LocalCache::Middleware, Rack::Runtime, Rack::MethodOverride, ActionDispatch::RequestId, ActionDispatch::RemoteIp, Sprockets::Rails::QuietAssets, Rails::Rack::Logger, ActionDispatch::ShowExceptions, WebConsole::Middleware, ActionDispatch::DebugExceptions, ActionDispatch::Reloader, ActionDispatch::Callbacks, ActiveRecord::Migration::CheckPending, ActionDispatch::Cookies, ActionDispatch::Session::CookieStore, ActionDispatch::Flash, ActionDispatch::ContentSecurityPolicy::Middleware, Rack::Head, Rack::ConditionalGet, Rack::ETag, Rack::TempfileReaper, Warden::Manager, OmniAuth::Strategies::Facebook
Application root          /Users/jorgenavarro/Desktop/GifizeMeFolder/GifizeMe
Environment               development
Database adapter          postgresql
Database schema version   20190210204649
```



