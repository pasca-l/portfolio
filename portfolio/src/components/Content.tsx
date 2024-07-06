export default function Content() {
  return (
    <>
      <div className="mb-4 rounded-md border border-gray-300 p-8">
        <article className="markdown-body">
          <h1 id="sample-markdown">Sample Markdown</h1>
          <p>This is some basic, sample markdown.</p>
          <h2 id="second-heading">Second Heading</h2>
          <ul>
            <li>
              Unordered lists, and:
              <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ol>
            </li>
            <li>More</li>
          </ul>
          <blockquote>
            <p>Blockquote</p>
          </blockquote>
          <p>
            And <strong>bold</strong>, <em>italics</em>, and even{" "}
            <em>
              italics and later <strong>bold</strong>
            </em>
            . Even <del>strikethrough</del>.{" "}
            <a href="https://github.com">A link</a> to somewhere.
          </p>
          <p>And code highlighting:</p>
        </article>
      </div>
    </>
  );
}
