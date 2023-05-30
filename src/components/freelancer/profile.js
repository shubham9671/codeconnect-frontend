import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const Profile = () => {
  const [freelancerData, setfreelancerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const raw = JSON.stringify({ tableName: 'user-freelancer-metadata' });
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
          setfreelancerData(data.body);
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
      {freelancerData && (
        <div>
          <Typography variant="h5" component="h2" style={{margin: '10px',  color: "white" , backgroundColor:"dodgerblue",width:'100%',textAlign:'center'}}>
            FreeLancers Details
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px',color:'green' }}>
            {freelancerData.map((item) => (
              <Card key={item.user_id} style={{ width: '300px', height:'370px' , margin: '10px',  color: "crimson" , backgroundColor:"#efe7e7" ,borderRadius:'33px'}}>
                <CardContent>

                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                  <img src={'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt="User" style={{ width: '150px', marginBottom: '10px' ,height:'150px'}} />
                  </div>
                  <Typography variant="h6" component="h3" style={{ marginBottom: '10px',color:'darksyan',fontWeight:'bold' }}>
                    Email: {item.email}
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: '10px',color:'black',fontWeight:'bold' }}>
                    User ID: {item.user_id}
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: '10px',color:'black',fontWeight:'bold'}}>
                    FullName: {item.full_name}
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: '10px',color:'black',fontWeight:'bold' }}>
                    Experience: {item.experience}
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

export default Profile;