
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

<details>
```
const NetflixSeries = () => {
  return (
    <div>

      <div>
        <img src="qot.jpg" alt="qot.jpg" width="60%" height="60%" />
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


```
</details>

- After Dynamic value NetflixSeries Component

<details>
```
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
        <img src="qot.jpg"  width="60%" height="60%" />
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

```
</details>