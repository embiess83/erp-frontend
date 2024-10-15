import { useState, useCallback, ChangeEventHandler, ReactEventHandler, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import { FormControl, FormHelperText, MenuItem, Select, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------



export type EntityProps = {
    id: string;
    name: string;
};

export function OrderForm() {

    const router = useRouter();

    const [total, setTotal] = useState('')
    const [productId, setProductId] = useState('')
    const [clientId, setClientId] = useState('')

    const [clients, setClients] = useState(new Array<EntityProps>());
    const [products, setProducts] = useState(new Array<EntityProps>());

    useEffect(() => {
        const auth = 'Bearer ' + localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: auth
            }
        };
        axios.get("https://jellyfish-app-p4kp5.ondigitalocean.app/v1/clients", config).then((res) => {
            setClients(res.data);
        });
        axios.get("https://jellyfish-app-p4kp5.ondigitalocean.app/v1/products", config).then((res) => {
            setProducts(res.data);
        });
    }, []);

    const handleSubmit = useCallback(async () => {
        const auth = 'Bearer ' + localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: auth
            }
        };
        const data = {
            id: uuidv4(),
            client: {
                id: clientId
            },
            items: [{
                id: uuidv4(),
                product: {
                    id: productId
                },
                quantity: 1,
                price: total,
                total: total
            }],
            total
        };
        const response = await axios.post(
            "https://jellyfish-app-p4kp5.ondigitalocean.app/v1/orders",
            data,
            config
        );
        router.push('/orders');
    }, [router, clientId, productId, total]);


    return (
        <DashboardContent>
            <Box display="flex" alignItems="center" mb={5}>
                <Typography variant="h4" flexGrow={1}>
                    Order Form
                </Typography>
            </Box>

            <Card>
                <form onSubmit={e => {
                    e.preventDefault();
                    handleSubmit();
                }
                } >
                    <Stack spacing={2} direction="column" sx={{ marginBottom: 4 }}>
                        <Select
                            label="Client"
                            id="client-select"
                            value={clientId}
                            variant="outlined"
                            style={{ margin: "5px" }}
                            onChange={e => setClientId(e.target.value)}
                            required
                        >
                            {
                                clients.map((cat) => <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>)
                            }
                        </Select>

                        <Select
                            label="Product"
                            id="product-select"
                            value={productId}
                            variant="outlined"
                            style={{ margin: "5px" }}
                            onChange={e => setProductId(e.target.value)}
                            required
                        >
                            {
                                products.map((cat) => <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>)
                            }
                        </Select>

                        <TextField
                            label="Total"
                            variant="outlined"
                            style={{ margin: "5px" }}
                            name="total"
                            type="text"
                            value={total}
                            onChange={e => setTotal(e.target.value)}
                            required
                        />

                    </Stack>

                    <Button variant="outlined" color="secondary" type="submit">Register</Button>
                </form>

            </Card>
        </DashboardContent>
    );
}
