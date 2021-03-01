# Customer List

## Environment 

- React Version: ^16.3.1
- React Native Version: 0.63.2
- Node Version: v12 (LTS)
- Default Port: 8000

## Application Demo:
![](https://hrcdn.net/s3_pub/istreet-assets/6j8w0j_6MADbIjOips-xWA/customer-list.gif)


## Functionality Requirements
The component must have the following functionalities:

- The input should initially be empty.
- If no value is entered, clicking on the 'Add' button should not do anything.
- Clicking on the `Add` button should add the input value to the list. 
- After adding the value to the list, clear the value of the input box. 
- Please note that the customer list, `FlatList` element should only be rendered if it has at least one customer added. So initially when app is mounted, since no customers are added, `FlatList` element should not be rendered.
- All the values added by the button should be rendered in the list.

## Testing Requirements

- The Input should have testID attribute 'app-input'.
- The `Add` Button should have testID attribute 'submit-button'.
- Customer list `FlatList` should have testID attribute 'customer-list'.
- Elements in the list should have testID attributes as 'list-item0', 'list-item1', 'list-item2', 'list-item3', and so on.

## Project Specifications

**Read Only Files**
- `__tests__/*`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
