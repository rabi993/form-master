
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import Refform from './components/Refform/Refform'
// import StatefullForm from './components/StatefullForm/StatefullForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = data =>{
  //       console.log('sign Up data',data);
  //   }
  // const handleUpdateProfile = data =>{
  //       console.log('Update Profile data',data);
  //   }


  return (
    <>
      
      <h1>Form Master</h1>

      <Grandpa></Grandpa>


      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <Refform></Refform> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign Up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText={'Update'}>
        <div>
          <h2>
              Update Profile
          </h2>
          <p>
              Always keep your profile updated
          </p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
