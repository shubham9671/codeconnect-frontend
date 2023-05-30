import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(2),
    maxWidth: 850,
    margin: '0 auto',
  },
  tableHeadCell:{
    backgroundColor:'black',
    color : 'white'

  },
  tableRow:{
  backgroundColor:'#d5d5d5'
  }

}));

const GetProject = () => {
  const classes = useStyles();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetchData();
    console.log(projectData)
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://x11yrjbjg1.execute-api.us-west-2.amazonaws.com/test/getallproject',{
        method: 'GET',
      });
      const data = await response.json();
      console.log("data:-",data.body)
      const finalData = data.body
      setProjectData(finalData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHeadCell}>
            <TableRow >
              <TableCell className={classes.tableHeadCell}>Project ID</TableCell>
              <TableCell className={classes.tableHeadCell}>Project Name</TableCell>
              <TableCell className={classes.tableHeadCell}>Deadline</TableCell>
              <TableCell className={classes.tableHeadCell}>Level</TableCell>
              <TableCell className={classes.tableHeadCell}>Project Description</TableCell>
              <TableCell className={classes.tableHeadCell}>Techstack</TableCell>
              {/* Add more table headings as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {projectData.map((project) => (
              <TableRow className={classes.tableRow}>
                <TableCell>{project.project_id}</TableCell>
                <TableCell>{project.project_name}</TableCell>
                <TableCell>{project.deadline}</TableCell>
                <TableCell>{project.level}</TableCell>
                <TableCell>{project.project_description}</TableCell>
                <TableCell>{project.techstack}</TableCell>
                {/* Add more table cells as needed */}
              </TableRow>
             ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default GetProject;