import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button ,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(2),
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    
  },
}));

const CreateProject = () => {
  const classes = useStyles();
  const [projectData, setProjectData] = useState({
    // project_id: '',
    project_name: '',
    deadline: '',
    level: '',
    project_description: '',
    techstack: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] =useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://vyhp83xfr3.execute-api.us-west-2.amazonaws.com/test/createItemBySponserTeam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      const data = await response.json();
      setSuccessMessage(" New Project Created Successfully");
      setResponseMessage(data.project_id)
      setIsFormSubmitted(true);

      console.log('Response:', data);
      // Handle the response from the API as needed
    } catch (error) {
      console.log('Error:', error);
      setResponseMessage("Error creating project")
      // Handle any error that occurs during the API request
    }
  };
//   const handleCreateProject =()=>{
//     setIsFormSubmitted(true);
//   }

  return (
    <div>
      {isFormSubmitted ? (
        <div>
          <Typography variant="h6" gutterBottom>
            {successMessage}
          </Typography>
          <Typography>{responseMessage}</Typography>
        </div>
      ) : (
        <>
      <h2>Create Project</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Project Name"
          name="project_name"
          value={projectData.project_name}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Deadline"
          name="deadline"
          value={projectData.deadline}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Level"
          name="level"
          value={projectData.level}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Project Description"
          name="project_description"
          value={projectData.project_description}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Tech Stack"
          name="techstack"
          value={projectData.techstack}
          onChange={handleInputChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" >
          Create Project
        </Button>
      </form>
      </>
      )}
      
    </div>
    
  );
};

export default CreateProject;