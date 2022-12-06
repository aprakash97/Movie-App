-Extract correct version of project
-npm install 
-npm run dev
-Modifying jsx file + check import jx, style.css 

for every action happening in the input box, re-render cycle happens. So nothing changes.
[Event is happening and react is rerendering]
Error can be shown in - console
Hint to correct Hooks
**useState**

Render function needs to fast and stateless
No ifs and for when handling the useState

const is not immutable in React.

const [location, setLocation] = useState("")
SHORTHAND
const locationHook = useState("");  // Returns an array
const location = locationHook[0];
const setLocation = locationHook[1];


CATHCES REACT HOOK WEIRD ERRORS - eg- Hooks inside if statements
npm install -D eslint-plugin-react-hooks@4.6.0
{
  "extends": [
    …
    "plugin:react-hooks/recommended",
    …
  ]
}

***EFFECTS***
"do a render of this component first so the user can see something then as soon as the render is done, then do something (the something here being an effect.)
we want the user to see our UI first then we want to make a request to the API so we can that initial list of pets.