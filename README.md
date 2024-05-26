
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

### how React Works?

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