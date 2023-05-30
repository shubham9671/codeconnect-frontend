import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import CreateProject from './CreateProject';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(2),
    maxWidth: 600,
    margin: '0 auto',
  },
  createButton: {
    marginTop: theme.spacing(2),
  },
  tableHeadCell:{
    backgroundColor:'black',
    color : 'white'

  },
  tableRow:{
  backgroundColor:'orange'
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [sponsorData, setSponsorData] = useState([]);
  const [showCreateProject,setShowCreateProject] = useState(false);

  useEffect(() => {
    fetchData();
    // console.log(sponsorData)
  }, []);

  const fetchData = async () => {
    try {
      var finalInputData = JSON.stringify({ "tableName": "user-sponser-metadata"})
      const response = await fetch('https://7clduk7mm6.execute-api.us-west-2.amazonaws.com/test/gettabledata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: finalInputData,
      });
      const data = await response.json();
    //   console.log("data is :-",data.body)
      const finalData = data.body
      setSponsorData(finalData);
    //   console.log("sponser data:-",sponsorData)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleCreateProject = () => {
    setShowCreateProject(true);
  };

  return (
    <div>
        {!showCreateProject ? (
        <>
        <Button
        variant="contained"
        color="primary"
        className={classes.createButton}
        onClick={handleCreateProject}
      >
        Create Project
      </Button>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHeadCell}>
            <TableRow>
              <TableCell className={classes.tableHeadCell}>SponserId</TableCell>
              <TableCell className={classes.tableHeadCell}>Email</TableCell>
              <TableCell className={classes.tableHeadCell}>First Name</TableCell>
              <TableCell className={classes.tableHeadCell}>Last Name</TableCell>
              {/* Add more table headings as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {sponsorData.map((sponsor) => (
              <TableRow className={classes.tableRow}>
                <TableCell>{sponsor.sponser_id}</TableCell>
                <TableCell>{sponsor.sponser_email}</TableCell>
                <TableCell>{sponsor.first_name}</TableCell>
                <TableCell>{sponsor.last_name}</TableCell>
                {/* Add more table cells as needed */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
    </>
    ) : (
        <CreateProject />
    )}
    </div>
  );
};

export default Dashboard;