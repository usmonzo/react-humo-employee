import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import {
  Container,
  Content,
  DateStatusP,
  GraphContainer,
  HorizontalContainer,
  PageNavigation,
  PageTitle,
  Primary,
  Secondary,
  Vertical,
  WhiteBox,
  WhiteBoxContent,
} from './MyStatisticElements';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page H',
    uv: 2190,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page I',
    uv: 1390,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page J',
    uv: 2490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page K',
    uv: 2890,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page L',
    uv: 490,
    pv: 4300,
    amt: 2100,
  },
];

const MyStatisticBody = () => {
  return (
    <Container>
      <Content>
        <PageNavigation>
          <PageTitle>Портфель</PageTitle>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              px={5}
              py={3}
              transition="all 0.2s"
              borderRadius="md"
              bg="#edeef0"
              _hover={{ bg: '#f5f5f5' }}
              _expanded={{ bg: '#f5f5f5' }}
              marginTop="1"
            >
              <DateStatusP>Сегодня</DateStatusP>
            </MenuButton>
            <MenuList>
              <MenuItem>Сегодня</MenuItem>
              <MenuItem>Вчера</MenuItem>
            </MenuList>
          </Menu>
        </PageNavigation>
        <HorizontalContainer>
          <WhiteBox>
            <WhiteBoxContent>
              <Secondary>Объем</Secondary>
              <Primary>1 000 000,72</Primary>
            </WhiteBoxContent>
          </WhiteBox>
          <GraphContainer>
            <Secondary>Объем портфеля ежемесячно</Secondary>
            <ResponsiveContainer>
              <BarChart
                width={670}
                height={200}
                data={data}
                margin={{
                  top: 12,
                  right: 5,
                  left: 5,
                  bottom: 45,
                }}
              >
                {/* <CartesianGrid strokeDasharray="2 1" /> */}
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                <Tooltip />
                {/* <Legend /> */}
                {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                <Bar dataKey="uv" fill="#F37A46" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </GraphContainer>
          <WhiteBox>
            <WhiteBoxContent>
              <Secondary>PAR30</Secondary>
              <Primary>12</Primary>
            </WhiteBoxContent>
          </WhiteBox>
        </HorizontalContainer>
        <PageNavigation>
          <PageTitle>Портфель</PageTitle>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="#edeef0"
              px={5}
              py={3}
              transition="all 0.2s"
              borderRadius="md"
              _hover={{ bg: '#f5f5f5' }}
              _expanded={{ bg: '#f5f5f5' }}
              marginTop="1"
            >
              <DateStatusP>Август</DateStatusP>
            </MenuButton>
            <MenuList>
              <MenuItem>Сентябрь</MenuItem>
              <MenuItem>Октябрь</MenuItem>
            </MenuList>
          </Menu>
        </PageNavigation>
        <HorizontalContainer>
          <WhiteBox>
            <WhiteBoxContent>
              <Vertical>
                <div>
                  <Secondary>Одобрено</Secondary>
                  <Primary>12 325</Primary>
                </div>
                <div>
                  <h4>Сегодня</h4>
                  <h6>+154</h6>
                </div>
              </Vertical>
            </WhiteBoxContent>
          </WhiteBox>
          <WhiteBox>
            <WhiteBoxContent>
              <Vertical>
                <div>
                  <Secondary>Одобрено</Secondary>
                  <Primary>12 325</Primary>
                </div>
                <div>
                  <h4>Сегодня</h4>
                  <h6>+154</h6>
                </div>
              </Vertical>
            </WhiteBoxContent>
          </WhiteBox>
          <WhiteBox>
            <WhiteBoxContent>
              <Vertical>
                <div>
                  <Secondary>Одобрено</Secondary>
                  <Primary>12 325</Primary>
                </div>
                <div>
                  <h4>Сегодня</h4>
                  <h6>+154</h6>
                </div>
              </Vertical>
            </WhiteBoxContent>
          </WhiteBox>
          <WhiteBox>
            <WhiteBoxContent>
              <Vertical>
                <div>
                  <Secondary>Одобрено</Secondary>
                  <Primary>12 325</Primary>
                </div>
                <div>
                  <h4>Сегодня</h4>
                  <h6>+154</h6>
                </div>
              </Vertical>
            </WhiteBoxContent>
          </WhiteBox>
          <WhiteBox>
            <WhiteBoxContent>
              <Vertical>
                <div>
                  <Secondary>Одобрено</Secondary>
                  <Primary>12 325</Primary>
                </div>
                <div>
                  <h4>Сегодня</h4>
                  <h6>+154</h6>
                </div>
              </Vertical>
            </WhiteBoxContent>
          </WhiteBox>
        </HorizontalContainer>
      </Content>
    </Container>
  );
};

export default MyStatisticBody;
