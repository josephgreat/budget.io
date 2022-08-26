import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import ButtonC from '../../components/Button'
import NewBudget from './NewBudget';

export default function Dashboard() {
  const [needsNewBudget, setNeedsNewBudget] = useState(false);
  return (
    <Box>
      <Flex as='nav'>
        <Heading>
          Dashboard
        </Heading>
        <ButtonC text="New Budget" icon={<FaPlusSquare />} onClick={() => setNeedsNewBudget(!needsNewBudget)}/>
      </Flex>
      {needsNewBudget && <NewBudget />}
    </Box>
  )
}
