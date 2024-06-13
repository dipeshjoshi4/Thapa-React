
# 1. Introduction to React.js & Why should you learn React

- React is not framwork it is JS Library for building user interfaces
- react is known for Create an awesome UI

### Understanding Components in React
- React is All About Components
- components is nothing but a function which can genrate components

### Why Use React & Declartive Approach ?

- declartive - it approach how ui  looks like not to focus like how to get it
- because of it this declartive approach more focused on end result rather then steps involved in getting there

- Declartive approach
- here we said i want this and whatever the name on nparameter it will be print
```
function myComponents({name}){
    return <div> Hello,{name}! </div>;
    }   
```
- Imperative approach
- here we have create element then add in his property then we get

```
function MyComponenents(name){
    const element= document.createElement('div');
    element.textContent = `hello,${name}!`;
    return element
}

```

### 2 how React Works?

- Component -----------more time used it became-----------> Instances ---------babel convert--------> React element(virtual dom)--->DOM Element---> Final UI

- in react element reconcilise phase start in  diffing algo used and different tree structure create and 

- there is 2 virtual dom and new virtual dom and whatever difference that update became browser virtual dom(which is DOM Element)

- this is the same DOM Element which we creat in js with manually but in react it can be made it automatically .thats out final UI

- its kind of abstraction we have to say top and end the whole between process created automatically

### why React?

- popular
- rich ecosystem-npm packages
- component based architecture
- Declarative approach

### installation

- 4 way we can create REACT.js project
1. Custom
2. create-react-app
3. Vite
4. Meta Frameworks(Next.js,Remix,Gatsby,etc.)

- then go to vite website where you will see 4 package manger you have to installed  one of them

- for using bun first write 

1. bun and hit enter => you see lots of bun information

2. npm i bun

3. bun create vite => install this

4. they asked project name so give project name

5. react choose

6. javascript

7. cd project name

8. npm install 
- if you use bun then write => bun install 

9. npm run dev OR 

10. bun dev

- now if version 19 in rc means => release catogary not properly launch so you have to do this expre step

- go to package.json => empty the dependcies 

```
 "dependencies": {
  },

```
- now in terminal do this one by one

1. bun install react@rc
2. bun install react-dom@rc

- no see package.json you see

```
  "dependencies": {
    "react": "^19.0.0-rc-935180c7e0-20240524",
    "react-dom": "^19.0.0-rc-935180c7e0-20240524"
  },

```

### 2.1 Fixing React Installation Issue & Bun, npm, and pnpm Setup

- with bun 
0. npm i -g bun
1. bun create vite
2. project-name
3. select react
4. select js
5. cd project-name
6. npm install => you use bun so => bun install
7. npm run dev => you use bun so => bun run dev or bun dev => use anyone

- with help of npm
0. node -v => check node version
1. npm -v => with node installation this npm package bydefault have so to check npm
2. npm create vite@latest
3. select react
4. select js
5. cd project-name
6. npm i 
7. npm run dev

- with help of pnpm
0. npm i -g pnpm
1. pnpm -v
- same as bun 

### 4. file name and folder structure

1. node_modules => all the necessary libaries and dependencies by react.js
2. public folder => all the static files like images and videos and fonts
3. src folder => containe the source file imp file(react components files ,jsx and css file)  

- App.jsx -> where you create structure of components
- Main.jsx -> which is import in main jsx

4. Index.html => from where the root element select by dom and main .jsx

5. eslintrc.cjs => show js syntax as per rule

6. .gitignore => git push na hone wali file jo github main nahi jaayegi node_modules nahi jatte github because of heavy load of dependency

7. package.json => all details & configuration  of your projects libraries,versions and script & dependecy

### 5.jsx in depth (javscript xml) 

- browser dont understand react

- with jsx you can write html code in js and place them in the DOM without any createElement() and appendchild() methods

- React.createElement => just write this and BEHIND THE SCENE REACT AUTOMATICALLY UPDATE without writing createlement()

- WITHOUT AUTTO CORRECTED REACT

```
export const App = () => {
  return <h1> Hello World!</h1>;
};

```


- writing pure react this => <h1> Hello World! </h1>

- React.createElement(input tag  || properties(attributes in Html) || child)

- React.createElement('h1',null,"Hello World!")

```
export const App = () => {
  return React.createElement("h1",null,"Hello World")
}
```

- so this React.creatElement is converted into React.Elements which is object and thats show what is render in 

- babel is compiler which conver react(jsx) code into valid js


### 6.Components in React

- components is js function which have jsx (html like code you can write js is called jsx)

- components is building block of react.allowing complex and interactive App

- always have .jsx extension in components

- two ways to create components

1. Class Components - before the function components class componenets is the way to create components

2. Function Components - this is morden and most recommended way of writing react.js components 

### 7. React Fragments

- WHY WE NEED REACT FRAGMENTS?

- so whenever we write components . we have to add seprate parent div for the jsx element and that seprate and unuse parent div 
- will add extra node for remove that extra node we can add <React.fragment></React.fragment> OR <fragment></fragment> OR <></>
- the third and very unpopular option is you you can write componments in array like form 
return([
  <NetflixSeries key="1"/>,<NetflixSeries key="2"/>
  ])

- WHY CANT WE ADD MULTIPLE ELEMENT SAME TIME ?

- as after jsx compiled and coverted into js object and you cant add multiple js object at same time
- return (jsx(---),jsx(---))

### 8.Dynamic Values in JSX:Injectinh Javascript into HTML

- you can add any varible of your component in jsx using {}

- Example:
```
function MyComponent(){
  const value = "Hey";
  return <p>{value}</p>;
}

```
- jsx allows you to write js expressions inside curly bracket include operations,function calls and other Js Expression produce a value

- return <div> The Result is : {1+2+3}</div>

- With Culry Bracket we chnage dynamacilly 3 main thing 
- 1. Varibles
- 2. Expressions
- 3. Function Calls

- Before Dynamic value NetflixSeries Component

- CODE:


<details>

``````
const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img src=""  width="60%" height="60%" />
      </div>
      <div>
        <h2>Name:Queen of Tears</h2>
        <h3>Rating:8.2</h3>
        <p>The queen of department stores and her small-town husband weather a marital crisis —until love miraculously begins to bloom again.</p>
        <h4>Genre:Thriller</h4>
      </div>
    </div>
  )
}

``````

</details>

- After Dynamic value NetflixSeries Component

- CODE:

<details>

``````
const NetflixSeries = () => {
  const name = "Queen"
  const summary = "The queen of department stores and her small-town husband weather a marital crisis —until love miraculously begins to bloom again."
  const returnGenre = () => {
    const Genre = "RomCom";
    return Genre
  }
  return (
    <div>
      <div>
        <img src=""  width="60%" height="60%" />
      </div>
      <div>
        <h2>Name:{name}</h2>
        <h3>Rating:{5 + 4}</h3>
        <p>{summary}</p>
        <h4>Genre:{ returnGenre()}</h4>
      </div>
    </div>
  )
}

``````
</details>

### 9.Conditionals Value In JSX

- you can either return a jsx early or you can use ternary operators for Conditionals in JSX 
- return <p>{age>=18 ? "Adult":"Minor"}</p>
- return <p>{age>=18 ? "Adult":"Minor"}</p>
- return <p>{age>=18 && "You can vote"}</p>
- return <p>{username ||  "Guest"}</p>

- you can add conditionals value in jsx 4 ways

- 1. this is first where conditions outside jsx and then y have to write whole code .so its break major rule DRY

```
const NetflixSeries = () => {
  const name = "Queen"
  let age = 15
  const summary = "The queen of department stores and her small-town husband weather a marital crisis —until love miraculously begins to bloom."
  const returnGenre = () => {
    const Genre = "RomComG";
    return Genre
  }

  if (age < 18) {
    return (
      <div>
        <div>
          <img src="qot.jpg" alt="qot.jpg" width="60%" height="60%" />
        </div>

        <div>
          <h2>Name:{name}</h2>
          <h3>Rating:{5 + 4}</h3>
          <p>{summary}</p>
          <h4>Genre:{returnGenre()}</h4>
          <button>Not Availble</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <img src="qot.jpg" alt="qot.jpg" width="60%" height="60%" />
      </div>

      <div>
        <h2>Name:{name}</h2>
        <h3>Rating:{5 + 4}</h3>
        <p>{summary}</p>
        <h4>Genre:{returnGenre()}</h4>
        <button>{  }Watch Now</button>
      </div>
    </div>
  )
}


```

- 2. code in js mode on in button

```
        <button>{age >= 18 ? "Watch Now" : "Not Availble"}</button>

```

- 3. Sometimes you might have very complex if conditions, for that there are some solutions

```
let canWatch = "Not Availble"
if(age >= 18) canWatch = "Watch Now"


return(
  <div>
        <button>{can Watch}</button>
  <div>
)

```

- 4. solitoon can be better as it prevernts cluttering of variables outside and encapsulates such logic inside a function

- one another benefit ia also that,you can also pass some dynamic values as functions parameter

```
const canWatch =() => {
      if(age >= 18) return "Watch Now";
      return "Not Avilable"
};

return(
  <div>
        <button>{can Watch()}</button>
  <div>
)

```

### 10. react question interview-1

- file saved on interview question is
1. Practices.jsx
2. source.md
### EXPLAIN
- react does not render 'false', 'null','undefined' or 'NaN' in the DOM.these values,when used in JSX,will result in nothing being displayed
- however,'0' and empty strings (`""`) are exceptions:
- **`0`** is rendered in the DOM because it is consideread a  valid react node.this means that if `0` is the result------------expression,it will appear in your UI
- **empty strings**(`""`) are also considered valid----------- and are renderead as well
### CODE
```
export const Practices = () => {
    const students = []
    return (
        <>

            {/* 1st solution */}
            {/* <p>{students.length === 0 && "No Students Found"}</p> */}


            {/* 2nd  solution */}
            {/* const students = [1] */}

            {/* 3rd solution */}
            {/* <p>{!students.length  && "No Students Found"}</p> */}

            {/* 4th solution */}
            {/* <p>{!Boolean(students.length)  && "No Students Found"}</p> */}

            <p>{students.length && "No Students Found"}</p>
            <p>Number Of Students : {students.length}</p>
        </>
    );
};


```

### 11. React Import and Export 

- 1. Default Export and Import

- Default Export : A file can have only one default Export
- Default Import : when  importing  a default  export,  you can name the import the same name 

- make components folder add on ecomponenet and then write command
```
export default NetflixSeries

```
in App.jsx first line write command

```
import NetflixSeries from "./components/NetflixSeries"

```

- 2. Named Export and Import

- for the export we have to write export before the function
```
export const NetflixSeries = () =>{
}
```
- for the  import in App.jsx  we have to write import with {component name} 

```
import {NetflixSeries} from "./components/NetflixSeries"

```
- Named Export : a file can have multiple named exports. each named exports  must be explicitly exported

- Named Import: when importing named exports, the import names must be ,match the export names exactly.

- Named imports must be enclosed in curly braces 

- you can import and export multiple componenet like this

```
- EXPORT IN NetflixSeries.jsx
export const NetflixSeries = () => { }
export const Footer = () => { }

- IMPORT IN App.jsx
import { NetflixSeries, Footer } from "./components/NetflixSeries"

```

- 3. Combined(Mixed) Export and Import

- both above method u can use  in mixed

- default export never be write in {} while import
- named export always write in {} while import

### 12. Looping iN JSX

- NOT FOR LOOP in jSX USE THE MAP
- .map()

- Example :

```
return(
  <ul>
  {students.map((student)=>(
      <li key={student}>{student}</li>
  ))}
  </ul>
);

```

- React.js will complain if you dont pass key prop to <li>
 
- react.js uses keys to differentiate each elements so that it can remove or edit correct element when a students gets added or removed dont worry we will talk further in detail.

- we can use arrays in jsx too. so here stduent.map return array jsx rendered on the page

### 13.Props in React JS - Making Netflix Cards Reusable

- React Props(properties) facilitate data transfer from parent to child components

- Data flows unidirectionally,ensuring a clear direction of information in React applications.

- Props are immutable.meaning child components can not modify the data recevied from parents

- child components access props through their function parameter

- You can also pass JSX  as props to another component

- we have loop with map and because of that our new new card will fetch from json data

- if we say we have app component which include NetflixSeries components => App.jsx > Netflixseries.jsx
- same way we have Netflixseries component which have SeriesCard Components => Netflixseries.jsx > SeriesCard.jsx

- so the direction is like that App.jsx > NetflixSeries.jsx(WHO PASS THE PROPS) > SeriesCard.jsx(who recevied the props) 

- how props passed => 
```
seriesData.map((curElem) => (<SeriesCard key={curElem.id} curElem={curElem} />))
```

- how props recevied =>
```
export const SeriesCard = (props) => {
    return (
        <li>
            <div>
                <img src={props.curElem.img_url} alt={props.curElem.name} width="60%" height="60%" />
            </div>

            <div>
                <h2>Name:{props.curElem.name}</h2>
                <h3>Rating:{props.curElem.rating}</h3>
                <p>{props.curElem.description}</p>
                <h4>Genre:{props.curElem.genre}</h4>
                <p>Cast:{props.curElem.cast}</p>
                <a href={props.curElem.watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </li>
    )
}
```           

### 14.  React Destructuring Props in JSX 

- so you can destrcture anyting in jsx .whateevr the props are its a object

- first when props pass we can give name currElem={currElem} => data={currElem}


export const SeriesCard = ({data}) => {
const { id, img_url, name, rating, description, cast, genre, watch_url } = data;
    return (

    )}

### 15.React Practise Challange-1-Passing JSX as Props 

- there are 3 way you can add props (iressepective of jsx as props)

- Question

```
import React from 'react';

function Profile() {
    return (
        <div>
            <h1>Profile Card Challange</h1>
            <ProfileCard
                name="Alice"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Alice,have a Wonderful day!</strong>
                    </div>
                }>
                <p>Hobbies:Hiking,Reading</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name="Bob"
                age={25}
                greeting={
                    <div>
                        <strong>Hello Bob, Keep up the great work</strong>
                    </div>
                }
            >
                <p>Hobbies:Gaming,Cooking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}


```

### 1.

- here you see props.children is property where you can add two tag bettween jsx also shown in UI with help of props 

```
function ProfileCard(props) {
    return (
        <>
            <h2>Name:{props.name}</ h2> 
            <p>Age:{props.age}</p>
            <p>{props.greeting}</p>
            <div>{props.children}</div>
        </>
    )
}
```
```
### 2.

function ProfileCard(props) {
    const { name, age, greeting, children } = props;
    return (
        <>
            <h2>Name:{name}</ h2> 
            <p>Age:{age}</p>
            <p>{greeting}</p>
            <div>{children}</div>
        </>
    )
}

```

```
### 3

function ProfileCard({ name, age, greeting, children }) {
    return (
        <>
            <h2>Name:{name}</ h2> 
            <p>Age:{age}</p>
            <p>{greeting}</p>
            <div>{children}</div>
        </>
    )
}

```

### 16.Add CSS Styling in React: Class vs. ClassName

- two bydefault CSS files 

1. App.css -> for the other style

2. index.css -> for the basix style 
## 17.  inline CSS Rules and different way to style

- inline styles are applied  directly  to the HTML elements via the  style attribute.this approach uses javascript objects
to define the css properties and values

### 1 javascript Object Syntax

- inline styles in react  are specified using javascript objects. properly names are  written in camelCase insted of the traditional CSS Kebab-case

```
const style = {
  backgroundColor:"blue",
  fontSize:"16px",  
  };

```
### 2 Units:

- for most numeric values, you need to specify units as  a string (e.g., '16px').
- some properties like zindex can take  numeric values directly

```
const style = {
  padding:"10px",
  zIndex:1,
};

```

### 3 Performance Considerations

- Defining Inline CSS directly within JSX can lead to performance issues because  a new object is created on every render.
- to avoid this ,define style outside of the render method or as constants.

```
const btnStyle = {
      backgroundColor:'blue',
      color:'white',
};

function MyButton(){
  return <button style = {btnStyle}>Click Me</button>
};

```

### 19. Conditional Styling for Dynamic UIs in React.js 

-  You Can Use  ternary Operators to add  conditional stylings to your CSS

- if you are using INLINE_CSS > WITH object now  you have to do conditional CSS then you have to do ternary 

### 20. CSS Modules in React : Scopes and Reusable Styles