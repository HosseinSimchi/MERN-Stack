import {Container, Typography, Card,
    CardContent ,CardActions ,Button, Paper } from '@mui/material';
import Image from 'next/image'


const HomePage = () => {
    return (
        <> 
            <Image src="/img/PersonalImg.png" alt="Image description" width="64" height="64" />
            <Container sx={{ width: '100%', maxWidth: 500, marginTop:5, textAlign:'center' }}>
                <Typography color='#6272a4' variant="h3">
                    Personal Website
                </Typography>
            </Container>
            <Container  sx={{textAlign:'center'}} >
                <Card sx={{ maxWidth:230, backgroundColor:'#bd93f9', marginTop:3, textAlign:'center' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            Hossein
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>

                    <CardActions sx={{marginLeft:7.5}}>
                        <Button size="small" sx={{backgroundColor:'#6272a4', color:'#ff79c6'}}>Learn More</Button>
                    </CardActions>

                </Card>
            </Container>
        </>
    )
}

export default HomePage;