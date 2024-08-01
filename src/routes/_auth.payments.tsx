import { createFileRoute } from '@tanstack/react-router'
import Payments from '../pages/payments'
import { Helmet } from 'react-helmet'

export const Route = createFileRoute('/_auth/payments')({
    component: () =>
        <>
            <Payments />
            <Helmet>
                <title>payments</title>
            </Helmet>
        </>
})