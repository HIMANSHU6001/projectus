import {NextRequest, NextResponse} from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Subscription from '@/models/Subscription';

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const data = await req.json();


        const subscription = await Subscription.create(data);

        return NextResponse.json({success: true, data: subscription}, {status: 201});
    } catch (error) {
        console.error('Subscription creation error:', error);
        return NextResponse.json(
            {success: false, error: (error as Error).message || 'Something went wrong'},
            {status: 500}
        );
    }
}

export async function GET() {
    try {
        await connectToDatabase();

        // Get all subscriptions
        const subscriptions = await Subscription.find({}).sort({createdAt: -1});

        return NextResponse.json({success: true, data: subscriptions});
    } catch (error) {
        console.error('Error fetching subscriptions:', error);
        return NextResponse.json(
            {success: false, error: (error as Error).message || 'Failed to fetch subscriptions'},
            {status: 500}
        );
    }
}
