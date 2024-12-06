# Basic layout of the app

- header
-- logo
-- search
-- nav items

- Body
-- container
---- half my profile
---- matching profiles 
-------matching progile cards
---------img
---------no of songs matche
---------mathch rating
---------no of arist matches
------discription

- footer
-- copyright
-- links
-- address
-- contact


- how to dynamically pass data to componenet ?
- sol = using props
-- props are gernally argument to a function
-- whenever you need to dynamically pass data to component do it using props

- config driven ui concept
- sol. 
-- ui is dependent on data that come from backend
-- if you want to change ui from backend you can do it sending 
-- particular data related of that ui feature 
-- for eg: adding color to certain product which is discounted so 
-- that we can add color in frotent if color is avail in data coming

- resusable components are necessary for making productioon ready app

- map is very important for react, whenever you are using map you should always pass a key

- if keys are not present react will re render all the components as it do not know the new card will come at which place 
- but if keys are present only the new component will be rendered
 dont use index as a keys in react its an antipattern

- react makes development fast

- there are two types of exports
- default and named exports

- react is fast bc it can so faster dom manipulation
- as soon as data layer changes react rerender the 
- dom very fast like a flash automatically

- state variable == super powerful react variable
- hooks == super poweful react function

# react hooks
(normal js utility function)
2 very important hooks
- useState()
- useEffect()

# reconciliation alogorithm ( react fiber) 

-                   - res-container
    - 1  -2  -3  -4  -5  -6  -7  -8  -9  10

react creates virtual dom of this res contaier
virtual dom is representaion of actual dom
virtual dom is a normal js object which represent 
the virtual dom

- Diff algorithm =
 whenever the button is clicked the dif algorithm
 finds the diffrence in new virtual dom and old
 virtual dom

- then it updates the real dom with diffrence

- this is answer to why react is fast
- it do not always updated real dom 


# monolithic and microservice artitecture

- monolithic artitecture all the services are present
- in a single huge codebase and do not follow single 
- responsiblity principle

- on the other hand a microservice artitecture is the one in which a sigle big project is divided in many
services and each service follow srp

- all these services talk to eack other
- you can 


# useEffect hook 

- useEffect is a hook in js (normal utility js function)
- it will be called once the page is rendered
- so whatever you want to do with after the page is rendered 
- you can write it in useeffect

- without Dependency array =  useffect is called every time it is rendered
- with Dependency = only once it will be called a
- if(dependency arr) 



# conditional rendering

- The feature of shimmer ui is only based on conditional rendering
- we render our page based on the condition 

# useState effect 

- syntax = const [btn, setbtn] = useState("INITIAL_BTN_VALUE");
- once setbtn called react will call respec. component once again
- behind the scenes react re render the component new btn variable 
- is made but now variable is created with new name that we passed as arg

- the whole component will get re rendered but due to reconciliation algo
- react will be able to know about changes in componnent and will only render
- only changes

- never declare or call usesate outside a component and keep it on start of component
- never create usestate use inside a if else condition
- these problems can cause inconsistencies

# Reactrouterdom and RouterProvider 

- it provides the functionality to add diffrent pages to your app
-  createBrowserRouter use to create router where we mention chiren routes

# Link tag
- this is a sub. to anchor tag
- you should not use anchor tag in react as it refresh the page which is
- time consuming task
- behind the scene link uses anchor tag. But Link is a wrapper over
- anchor tag it changes its functionality and ensures that websites do
not refreshes

# 2 types of routing
- Server side routing(new call is made on every page)
- Client side routing


