<template>
  <div class="document-conversion">
    <h2 class="text-xl font-semibold mb-4">Document Conversion</h2>
    <input type="file" @change="onFileChange" class="mb-4" />
    <div v-if="loading" class="loading">Processing...</div>
    <div v-else-if="error" class="error text-red-600">{{ error }}</div>
    <div v-else-if="extractedText" class="extracted-text mt-4">
      <h3 class="text-lg font-semibold mb-2">Extracted Text:</h3>
      <pre class="bg-gray-100 p-4 border">{{ extractedText }}</pre>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Tesseract from 'tesseract.js'

export default {
  name: 'DocumentConversion',
  setup() {
    const extractedText = ref('')
    const loading = ref(false)
    const error = ref(null)

    const onFileChange = (event) => {
      const file = event.target.files[0]
      if (file) {
        processFile(file)
      }
    }

    const processFile = async (file) => {
      loading.value = true
      error.value = null
      extractedText.value = ''

      try {
        const result = await Tesseract.recognize(file, 'eng', {
          logger: (m) => console.log(m) // Log progress if needed
        })
        extractedText.value = result.data.text
      } catch (err) {
        error.value = 'Failed to process the document. Please try again.'
        console.error(err)
      } finally {
        loading.value = false
      }
    }

    return {
      extractedText,
      loading,
      error,
      onFileChange
    }
  }
}
</script>

<style scoped>
.loading {
  color: #999;
}

.extracted-text {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
