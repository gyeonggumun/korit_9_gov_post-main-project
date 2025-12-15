import { QueryClient } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0, // 응답을 보낼때 기본 요청을 3번보내는 걸 즉시 응답 0으로 설정
        }
    }
});

const root = document.getElementById('root');
createRoot(root).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>
)
