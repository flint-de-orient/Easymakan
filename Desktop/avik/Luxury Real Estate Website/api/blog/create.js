export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const {
      title,
      meta_title,
      meta_description,
      summary,
      article,
      tags,
      image_prompt,
      selected_area,
      generation_date
    } = req.body;

    // Create blog post object
    const blogPost = {
      id: Date.now(),
      title: title || 'Untitled Blog Post',
      meta_title: meta_title || title,
      meta_description: meta_description || summary,
      excerpt: summary || '',
      content: article || '',
      category: 'Market Insights',
      author: 'Easymakan Team',
      createdAt: new Date().toISOString(),
      published: true,
      tags: tags || [],
      slug: (title || 'untitled').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      image_prompt: image_prompt || '',
      selected_area: selected_area || 'Kolkata',
      generation_date: generation_date || new Date().toLocaleDateString()
    };

    // Store in localStorage format (you can add database later)
    console.log('New blog post received:', {
      title: blogPost.title,
      area: blogPost.selected_area,
      timestamp: blogPost.createdAt
    });

    return res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      id: blogPost.id
    });

  } catch (error) {
    console.error('Error creating blog post:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}