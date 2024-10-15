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
import { CategoryProps } from '../list/product-table-row';

// ----------------------------------------------------------------------

export function ProductForm() {

    const router = useRouter();

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [categoryId, setCategoryId] = useState('')

    const [categories, setCategories] = useState(new Array<CategoryProps>());

    useEffect(() => {
        const auth = 'Bearer ' + localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: auth
            }
        };
        axios.get("https://jellyfish-app-p4kp5.ondigitalocean.app/v1/categories", config).then((res) => {
            console.log(res.data);
            setCategories(res.data);
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
            name,
            price,
            category: {
                id: categoryId
            }
        };
        const response = await axios.post(
            "https://jellyfish-app-p4kp5.ondigitalocean.app/v1/products",
            data,
            config
        );
        router.push('/products');
    }, [router, name, price, categoryId]);


    return (
        <DashboardContent>
            <Box display="flex" alignItems="center" mb={5}>
                <Typography variant="h4" flexGrow={1}>
                    Product Form
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
                            label="Category"
                            id="category-select"
                            value={categoryId}
                            variant="outlined"
                            style={{ margin: "5px" }}
                            onChange={e => setCategoryId(e.target.value)}
                            required
                        >
                            {
                                categories.map((cat) => <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>)
                            }
                        </Select>

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
                            label="Price"
                            variant="outlined"
                            style={{ margin: "5px" }}
                            name="phone"
                            type="text"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            required
                        />

                    </Stack>

                    <Button variant="outlined" color="secondary" type="submit">Register</Button>
                </form>

            </Card>
        </DashboardContent>
    );
}
