import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';
import Login from './components/LoginTestDriven';
import  {getAllPackages} from './apiRoutes/PackageRoutes';
import  {Login} from './apiRoutes/userRoutes';
const title = 'Test Title';
let wrapped = shallow(<Title>{title}</Title>);


describe('Title', () => {
  it('should render the Title Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the Titles children', () => { 
    expect(wrapped.find('h1').text()).toEqual(title);
  });
});


describe('Courses Test',() => {
  it('verify all courses retrieve successfully',async () => {   
    const response = await getAllPackages().then(r => {
           
      expect(r.data.verifycode).toBe(true);
      expect(r.data.verify).toBe("success");
      
    
    })
    
  });
  
});

describe('Unique package Test',() => {
  it('verify unique package retrieve successfully',async () => {
    
    //mock package id send

    const response = await Login("6023623bd82e6f14c4bb77de").then(r => {
           
      // assertions

      expect(r.data.code).toBe(true);
      expect(r.data.verifyMessage).toBe("success");
      
    })
    
  });
  
});


describe('Login user Test',() => {
  it('verify user login',async () => {
    
    //mock user send

    let user = {
      email : "test@gmail.com",
      password : "test12"
    }

    const response = await Login(user).then(r => {
           
      // assertionss
      
      expect(r.data.code).toBe(true);
      expect(r.data.isToken).toBe(true);
      expect(r.data.email).toBe(user.email);
      expect(r.data.verifyMessage).toBe("successfully login");
      
    })
    
  });
  
});

describe('Login Component', () => {
    it('should render without throwing an error', () => {
    expect(shallow(<Login />).find('form.login').exists()).toBe(true)
    })

    it('renders a email input', () => {
        expect(shallow(<Login />).find('#email').length).toEqual(1)
       })
       it('renders a password input', () => {
        expect(shallow(<Login />).find('#password').length).toEqual(1)
       })
   })