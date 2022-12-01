import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Menu, MenuButton, MenuItem, MenuList, Progress, Select, Tab, Table, TableCaption, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { NavBar } from "../components/NavBar"
import { shopCarFoodState } from "../Store/MainStore";

interface ListProps {
    food: string,
    price: number,
    staple: string,
}

export const CheckoutPage = () => {
    const [step, setStep] = useState<number>(0);
    const [money, setmoney] = useState<number>(390);
    const navigate = useNavigate();
    const [Checkcompleted, setCheckCompleted] = useState<boolean>(true);
    const [Paycompleted, setPayCompleted] = useState<boolean>(false);
    const [Outcompleted, setOutCompleted] = useState<boolean>(false);
    const [ShopCarFood, setShopCarFood] = useRecoilState(shopCarFoodState);
    const [Payment, setPayment] = useState<string>('付款方式');
    return (
        <>
            <NavBar />
            <Progress value={step} />
            <Box bgImage='https://topeat.tw/images/bg-bottom.webp' bgRepeat='repeat'>
                {Checkcompleted &&
                    <>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>品項</Th>
                                        <Th>配餐</Th>
                                        <Th>金額</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>

                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>To convert</Th>
                                        <Th>into</Th>
                                        <Th>multiply by</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                        {/* <div className="flex justify-center">
                            <Heading size='2xl'>確認訂單</Heading>
                        </div>
                        <Box>
                            <Heading size='xl'>{ShopCarFood}</Heading>
                        </Box>
                        <Button colorScheme='blue' onClick={() => {
                            setCheckCompleted(false);
                            setPayCompleted(true);
                            setStep(33);
                        }}>確認完成
                        </Button> */}
                    </>
                }
                {Paycompleted && <div>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            {Payment}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => { setPayment('現金付款') }}>現金付款</MenuItem>
                            <MenuItem onClick={() => { setPayment('載具付款') }}>載具付款</MenuItem>
                            <MenuItem onClick={() => { setPayment('信用卡付款') }}>信用卡付款</MenuItem>

                        </MenuList>
                    </Menu>
                    {Payment == '現金付款' && <div>
                        {/* 這裡會塞條件 */}
                        <Text>現金支付:{money}元</Text>
                    </div>}

                    {Payment == '載具付款' && <div>
                        {/* 這裡會塞條件 */}
                        <Text>載具支付:{money}元</Text>
                    </div>}

                    {Payment == '信用卡付款' && <div>
                        {/* 這裡會塞條件 */}
                        <Text>信用卡支付:{money}元</Text>

                    </div>}
                    <br />
                    <Button className=" left-2 " colorScheme='blue' onClick={() => {
                        setCheckCompleted(true);
                        setPayCompleted(false);
                        setStep(0);
                    }}>上一頁</Button>
                    {<Button className=" left-4 " colorScheme='blue' onClick={() => {
                        setPayCompleted(false);
                        setOutCompleted(true);
                        setStep(66);
                    }}>確認完成</Button>}

                </div>}

                {Outcompleted && <div>
                    <Text fontSize='4xl'>完成訂單</Text>
                    {/* <div><MealList Order={Orderlist} /></div>暫時這樣用 */}
                    <div>{Payment}:{money}</div>

                    <br />
                    <Button className=" left-2 " colorScheme='blue' onClick={() => {
                        setOutCompleted(false);
                        setPayCompleted(true);
                        setStep(33);
                    }}>上一頁</Button>
                    <Button className=" left-4 " colorScheme='blue' onClick={() => {
                        navigate('/History')
                    }}>前往歷史訂單</Button>
                </div>}
            </Box>

        </>
    )
}