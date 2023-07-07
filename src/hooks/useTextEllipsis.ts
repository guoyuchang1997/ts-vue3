import { ref, watchEffect, Ref } from 'vue'

/**
 * 自定义 hook，用于截断文本
 * @param text 要截断的文本
 * @param maxLength 最大长度
 * @returns 截断后的文本
 */
export function useTextEllipsis(
  text: string,
  maxLength: number
): {
  truncatedText: Ref<string>
} {
  const truncatedText: Ref<string> = ref('')

  /**
   * 截断文本逻辑
   * @param text 要截断的文本
   * @param maxLength 最大长度
   * @returns 截断后的文本
   */
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text
    }
    return `${text.slice(0, maxLength)}...`
  }

  /**
   * 计算截断后的文本
   */
  const computeTruncatedText = () => {
    truncatedText.value = truncateText(text, maxLength)
  }

  // 监听 text 和 maxLength 的变化
  watchEffect(computeTruncatedText)

  return {
    truncatedText,
  }
}
