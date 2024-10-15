import { useState, useCallback, ChangeEventHandler, ReactEventHandler } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import { FormControl, FormHelperText, Stack, TextField } from '@mui/material';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export function ClientForm() {

    const router = useRouter();

    const [name, setName] = useState('')
    const [registerNumber, setRegisterNumber] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = useCallback(async () => {
        const auth = 'Bearer ' + localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: auth
            }
        };
        const data = {
            id:  uuidv4(),
            name,
            registerNumber,
            phones: [{ phone }],
            emails: [{ email }]
        };
        const response = await axios.post(
            "https://jellyfish-app-p4kp5.ondigitalocean.app/v1/clients",
            data,
            config
        );
        console.log(response);
        router.push('/clients');
    }, [router, name, registerNumber, phone, email]);


    return (
        <DashboardContent>
            <Box display="flex" alignItems="center" mb={5}>
                <Typography variant="h4" flexGrow={1}>
                    Client Form
                </Typography>
            </Box>

            <Card>
                <form onSubmit={e => {
                    e.preventDefault();
                    handleSubmit();
                }
                } >
                    <Stack spacing={2} direction="column" sx={{ marginBottom: 4 }}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            style={{ margin: "5px" }}
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        <TextField
                            label="Register Number"
                            variant="outlined"
                            style={{ margin: "5px" }}
                            name="registerNumber"
                            type="text"
                            value={registerNumber}
                            onChange={e => setRegisterNumber(e.target.value)}
                            required
                        />

                        <TextField
                            label="Phone"
                            variant="outlined"
                            style={{ margin: "5px" }}
                            name="phone"
                            type="text"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                        />

                        <TextField
                            label="E-mail"
                            variant="outlined"
                            style={{ margin: "5px" }}
                            name="email"
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </Stack>

                    <Button variant="outlined" color="secondary" type="submit">Register</Button>
                </form>

            </Card>
        </DashboardContent>
    );
}
