import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const ProjectProgress = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const raw = JSON.stringify({ tableName: 'user-progress' });
        const response = await fetch('https://7clduk7mm6.execute-api.us-west-2.amazonaws.com/test/gettabledata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: raw,
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data.body)
          setProgressData(data.body);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {progressData && (
        <div>
          <Typography variant="h5" component="h2" style={{ margin: '10px',  color: "white" , backgroundColor:"darkslategrey",width:'100%',textAlign:'center'}}>
            Project Progress
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px',color:'green' }}>
            {progressData.map((item) => (
              <Card key={item.project_id} style={{ width: '300px', margin: '10px',  color: "crimson" , backgroundColor:"gray",borderRadius:'4px'}}>
                <CardContent>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                  <img src={'https://freesvg.org/img/ProgressBar.png'} alt="User" style={{ width: '233px', marginBottom: '-56px',marginTop:'-46px',marginLeft:'-59px' ,height:'150px'}} />
                  </div>
                  <Typography variant="h6" component="h3" style={{ marginBottom: '10px',color:'black',fontWeight:'bold' }}>
                    Project: {item.project_name}
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: '10px',color:'black',fontWeight:'bold' }}>
                    User ID: {item.user_id}
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: '10px',color:'black',fontWeight:'bold' }}>
                    Project Id: {item.project_id}
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: '10px',color:'black',fontWeight:'bold'}}>
                    Progress Status: {item.progress_status}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectProgress;