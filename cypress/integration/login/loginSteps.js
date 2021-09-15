import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

const loginPage = new LoginPage();


When('invoke function {string} with', (functionName, datatable) => {
   datatable.hashes().forEach(element => {
    executeFunctionByName(functionName, loginPage, element.username, element.password);

   });
})

Then('invoke function {string} with {string}', (functionName, arg1) => {
    executeFunctionByName(functionName, loginPage, arg1);
})


Then('invoke function {string}', (functionName)=>{
    executeFunctionByName(functionName, loginPage);
})



function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
    
  }

  