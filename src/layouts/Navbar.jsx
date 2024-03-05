import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'

const Navbar = () => {
  return (
    <section>
      <Container className=" font-philosopher">
        <Flex className="grid grid-cols-2 gap-4">
          <div>
            <h1 className='font-bold text-3xl'>Mezan</h1>
          </div>
          <Flex className="w-4/5 justify-end">
          <ul className='flex gap-x-10 mt-1'>
            <List text="Home" className=" font-bold"/>
            <List text="About" className=" font-bold"/>
            <List text="Skills" className=" font-bold"/>
            <List text="Services" className=" font-bold"/>
            <List text="Portfolio" className=" font-bold"/>
            <List text="Contact" className=" font-bold"/>
          </ul>
        </Flex>
        </Flex>
      </Container>
    </section>
  )
}

export default Navbar