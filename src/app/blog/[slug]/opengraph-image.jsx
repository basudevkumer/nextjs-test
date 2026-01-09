import { ImageResponse } from 'next/og';

// ইমেজের মেটাডেটা সেট করা (এগুলো HTML head ট্যাগ তৈরিতে সাহায্য করে)
export const alt = 'ব্লগ পোস্টের ছবি';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// মূল ফাংশন যা ইমেজ জেনারেট করে
export default async function Image({ params }) {
  // dynamic route থেকে slug টি নেওয়া হচ্ছে
  const { slug } = await params;

  return new ImageResponse(
    (
      // নিচের এই অংশটি একটি ইমেজ হিসেবে সেভ হবে
      <div
        style={{
          background: 'linear-gradient(to right, #1e3a8a, #3b82f6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
        }}
      >
        {/* লোগো বা ছোট টেক্সট */}
        <div style={{ fontSize: 24, opacity: 0.8, marginBottom: 20 }}>
          MY TECH BLOG
        </div>
        
        {/* মেইন টাইটেল */}
        <div
          style={{
            fontSize: 70,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '0 60px',
            textTransform: 'capitalize',
          }}
        >
          {slug.replace(/-/g, ' ')}
        </div>

        {/* নিচের বার */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 20,
            color: '#bfdbfe',
          }}
        >
          Read more at example.com
        </div>
      </div>
    ),
    // ইমেজের সাইজ কনফিগারেশন
    {
      ...size,
    }
  );
}