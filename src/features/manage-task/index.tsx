import { styled } from 'styled-components';
import CardProcess from './components/CardProcess';
import CustomCard from './components/CustomCard';

function ManageTask() {
    return (
        <ContainerCard>
            <div>
                <CardProcess />
                <ContainerItemCard >
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                </ContainerItemCard>
            </div>
            <div>

                <CardProcess />
                <ContainerItemCard >
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                </ContainerItemCard>
            </div>
        </ContainerCard>

    );
}
const ContainerCard = styled.div`
    display: flex;
    gap: 20px;
    height: 100%;
`
const ContainerItemCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto
`
export default ManageTask;