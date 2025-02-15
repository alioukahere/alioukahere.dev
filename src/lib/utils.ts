export function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch (error) {
    console.error(`Error formatting date: ${dateString}`, error)
    return dateString // Fallback to original string if parsing fails
  }
}
