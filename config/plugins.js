

module.exports = ({ env }) => ({

  'import-export-entries': {
    enabled: true,
  },
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
    }
  },
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        htmlEmbed: {
            showPreviews: true,
            sanitizeHtml: ( inputHtml ) => {
                // Strip unsafe elements and attributes, e.g.:
                // the `<script>` elements and `on*` attributes.
                const outputHtml = sanitize( inputHtml );

                return {
                    html: outputHtml,
                    // true or false depending on whether the sanitizer stripped anything.
                    hasChanged: true
                };
            }
        }
      }
    }
  },


});

