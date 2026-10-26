import {useLoading} from '@/components/loading/LoadingPage.helpers'
import styles from '@/components/loading/LoadingPage.module.css'

export function Loading() {
    const {isLoading, containerLoading} = useLoading()

    return (
        <div>
         {isLoading ? (
        <div ref={containerLoading} className={styles.active_loading}>
         {String(isLoading)}:   тип активной загрузки
        </div>)
        : (
        <div ref={containerLoading} className={styles.not_active_loading}>
         {String(isLoading)}: : тип неактивной загрузки
        </div>
        )
        }
        </div>
        )}