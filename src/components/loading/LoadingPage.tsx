import {useLoading} from '@/components/loading/LoadingPage.helpers'
import styles from '@/components/loading/LoadingPage.module.css'

export function Loading() {
    const {isLoading} = useLoading()

    return (
        <div>
         {isLoading ? (
        <div className={styles.container_loading}>
        <img className={styles.active_loading_picture} src={'./public/favicon/web-app-manifest-512x512.png'} alt={'вафли/waffles'}  />
        </div>)
        : (
            null
        )
        }
        </div>
        )}